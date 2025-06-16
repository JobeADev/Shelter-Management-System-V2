package com.techelevator.dao;

import com.techelevator.exception.DaoException;
import com.techelevator.model.Owner;
import com.techelevator.model.Pet;
import com.techelevator.model.dto.AddPetDto;
import com.techelevator.model.dto.OwnerInfoDto;
import com.techelevator.model.dto.PetStatusChangeDto;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcPetDao implements PetDao {
    private final JdbcTemplate jdbcTemplate;

    public JdbcPetDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Pet> getPets() {
        List<Pet> petList = new ArrayList<>();

        String sql = "SELECT * FROM pets WHERE status = 1 ORDER BY pet_id ASC;";
        int counter = 0;
        try {
            SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql);
//            List<String[]> rowSet2 = jdbcTemplate.query(sql, (rs, rowNum) -> (String[]) rs.getArray("images").getArray());
            List<String[]> rowSet2 = jdbcTemplate.query(sql, (rs, rowNum) -> {
                java.sql.Array sqlArray = rs.getArray("images"); // Get the SQL array object
                if (sqlArray != null) { // Check if the SQL array is not null
                    return (String[]) sqlArray.getArray(); // Get the Java array if not null
                } else {
                    return null; // Return null if the SQL array is null
                }
            });
            while ( rowSet.next() ) {
                Pet pet = mapRowToPet(rowSet);
                if (rowSet2.get(counter) != null) {
                    String[] images = rowSet2.get(counter);
                    pet.setImages(images);
                }
                petList.add(pet);
                counter++;
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return petList;
    }

//    public List<String[]> getArrayData() {
//        String sql = "SELECT array_column FROM my_table";
//        return jdbcTemplate.query(sql, (rs, rowNum) -> {
//            String[] array = (String[]) rs.getArray("array_column").getArray();
//            return array;
//        });
//    }

    @Override
    public List<Pet> getMostRecentPets() {
        List<Pet> petList = new ArrayList<>();

        String sql = "SELECT * FROM pets WHERE status = 1 ORDER BY pet_id DESC LIMIT 5";
        int counter = 0;
        try {
            SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql);
            List<String[]> rowSet2 = jdbcTemplate.query(sql, (rs, rowNum) -> {
                java.sql.Array sqlArray = rs.getArray("images"); // Get the SQL array object
                if (sqlArray != null) { // Check if the SQL array is not null
                    return (String[]) sqlArray.getArray(); // Get the Java array if not null
                } else {
                    return null; // Return null if the SQL array is null
                }
            });
            while ( rowSet.next() ) {
                Pet pet = mapRowToPet(rowSet);
                if (rowSet2.get(counter) != null) {
                    String[] images = rowSet2.get(counter);
                    pet.setImages(images);
                }
                petList.add(pet);
                counter++;
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return petList;
    }

    @Override
    public int getLastPetId() {
        int petId = 0;
        String sql = "SELECT pet_id FROM pets ORDER BY pet_id DESC LIMIT 1;";
        try {
            SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql);
            while ( rowSet.next() ) {
                petId = rowSet.getInt("pet_id");
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return petId;
    }

    @Override
    public void updatePet(Pet pet) {
        String sql = "UPDATE pets SET name = ?, gender = ?, weight = ?, species = ?, breed = ?, color = ?, birthday = ?, description = ?, status = ? WHERE pet_id = ?;";
        jdbcTemplate.update(sql,
                pet.getName(),
                pet.getGender(),
                pet.getWeight(),
                pet.getSpecies(),
                pet.getBreed(),
                pet.getColor(),
                pet.getBirthday(),
                pet.getDescription(),
                pet.getStatus(),
                pet.getPetId());
    }

    @Override
    public void updatePetStatus(PetStatusChangeDto status) {
        String sql = "UPDATE pets SET status = ? WHERE pet_id = ?;";
        try {
            jdbcTemplate.update(sql, status.getStatusId(), status.getPetId());
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }
    }

    public Pet getPetById(int petId) {
        Pet pet = null;
        String sql = "SELECT * FROM pets WHERE pet_id = ?;";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, petId);

        if(results.next()) {
            pet = mapRowToPet(results);
        }
        return pet;
    }

    @Override
    public Owner getOwnerById(int ownerId) {
        Owner owner = null;
        String sql = "SELECT * FROM owner WHERE owner_id = ?;";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, ownerId);

        if(results.next()) {
            owner = mapRowToOwner(results);
        }
        return owner;
    }

    public Pet addPet(AddPetDto pet) {
        String sql = "INSERT INTO pets (name, gender, weight, species, breed, color, birthday, description, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING pet_id;";
        int newPetId = -1;

        try {
            newPetId = jdbcTemplate.queryForObject(sql, Integer.class,
                    pet.getName(),
                    pet.getGender(),
                    pet.getWeight(),
                    pet.getSpecies(),
                    pet.getBreed(),
                    pet.getColor(),
                    pet.getBirthday(),
                    pet.getDescription(),
                    1
            );
        } catch(CannotGetJdbcConnectionException e) {

        } catch(DataIntegrityViolationException e) {

        }

        return getPetById(newPetId);
    }

    @Override
    public Owner addOwner(OwnerInfoDto owner) {
        String sql = "INSERT INTO owner (owner_name, pet_id, adoption_date) VALUES (?,?,?) RETURNING owner_id";
        int newOwnerId = 0;

        try {
            newOwnerId = jdbcTemplate.queryForObject(sql, int.class, owner.getOwnerName(), owner.getPetId(), owner.getAdoptionDate());
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }

        return getOwnerById(newOwnerId);
    }

    private Pet mapRowToPet(SqlRowSet rs) {
        Pet pet = new Pet();
        pet.setPetId(rs.getInt("pet_id"));
        pet.setName(rs.getString("name"));
        pet.setGender(rs.getString("gender"));
        pet.setWeight(rs.getFloat("weight"));
        pet.setSpecies(rs.getString("species"));
        pet.setBreed(rs.getString("breed"));
        pet.setColor(rs.getString("color"));
        pet.setBirthday(rs.getDate("birthday"));
        pet.setDescription(rs.getString("description"));
        pet.setStatus(rs.getInt("status"));
        return pet;
    }

    private Owner mapRowToOwner(SqlRowSet rs) {
        Owner owner = new Owner();
        owner.setOwnerId(rs.getInt("owner_id"));
        owner.setOwnerName(rs.getString("owner_name"));
        owner.setPetId(rs.getInt("pet_id"));
        owner.setAdoptionDate(rs.getDate("adoption_date"));
        return owner;
    }

}
