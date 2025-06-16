import { Link } from "@tanstack/react-router";
import "./Dropdown.css";

export default function Dropdown(props) {
  return (
    <ul className="dropdown-list w3-animate-opacity">
      {props.props.map((i, index) => (
        <li key={index} className="dropdown-item">
          <Link className="dropdown-link" to={i.path}>
            {i.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
