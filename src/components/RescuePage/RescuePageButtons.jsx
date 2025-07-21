import { Link } from "@tanstack/react-router";

export default function RescuePageButtons(props) {
  return (
    <section className="rescue-page-btn-container">
      <Link to={props.backPath}>
        <p className="rescue-page-btn-back">
          {props.species === "Cat" || props.species === "Dog"
            ? `SEE ALL ${props.species.toUpperCase()}S`
            : "SEE ALL OTHERS"}
        </p>
      </Link>
      <Link>
        <p
          className={
            props.name.length < 7
              ? "rescue-page-btn-adopt"
              : "rescue-page-btn-adopt name-long"
          }
        >{`ADOPT ${props.name.toUpperCase()}`}</p>
      </Link>
    </section>
  );
}
