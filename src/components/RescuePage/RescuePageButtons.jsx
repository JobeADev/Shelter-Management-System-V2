import { Link } from "@tanstack/react-router";

export default function RescuePageButtons(props) {
  return (
    <section className="rescue-page-btn-container">
      <Link to={props.backPath}>
        <p className="rescue-page-btn-back">
          {props.species === "Cat" || props.species === "Dog"
            ? `ALL ${props.species.toUpperCase()}S`
            : "ALL OTHERS"}
        </p>
      </Link>
      {props.name != undefined ? (
        <Link>
          <p
            className={
              props.name.length < 7
                ? "rescue-page-btn-adopt"
                : "rescue-page-btn-adopt name-long"
            }
          >{`ADOPT ${props.name.toUpperCase()}`}</p>
        </Link>
      ) : null}
    </section>
  );
}
