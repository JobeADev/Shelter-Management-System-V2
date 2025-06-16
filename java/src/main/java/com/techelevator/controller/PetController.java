package com.techelevator.controller;

import com.techelevator.dao.PetDao;
import com.techelevator.model.Pet;
import com.techelevator.model.dto.AddPetDto;
import com.techelevator.model.dto.OwnerInfoDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PetController {

    @Autowired
    private PetDao petDao;

    @GetMapping(path="/api/pets")
    public List<Pet> getPets() {
        return petDao.getPets();
    }

    @GetMapping(path="/api/recentPets")
    public List<Pet> getMostRecentPets() {
        return petDao.getMostRecentPets();
    }

    @GetMapping(path="/api/lastPetId")
    public int getLastPetId() {
        return petDao.getLastPetId();
    }

    @GetMapping(path="/api/pet/{id}")
    public Pet getPetById(@PathVariable int id) {
        return petDao.getPetById(id);
    }

    @PutMapping(path="/api/updatePet/{id}")
    public void updatePet(@PathVariable int id, @RequestBody Pet pet) {
        pet.setPetId(id);
        petDao.updatePet(pet);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="/api/addPet")
    public void addPet(@RequestBody AddPetDto pet) {
        petDao.addPet(pet);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="/api/addOwner")
    public void addOwner(@RequestBody OwnerInfoDto owner) {
        petDao.addOwner(owner);
    }
}
