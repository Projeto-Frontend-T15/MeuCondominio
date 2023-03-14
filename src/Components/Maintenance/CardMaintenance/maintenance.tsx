import { Link } from "react-router-dom";
import { iMaintenance } from "../../../Contexts/interfacesResident";

export function CardMaintenance({ name, service, contact}:iMaintenance) {

  return (
    <li>
      <h2>Nome</h2>
      <h3>Função</h3>
      <Link to={""}>WhatsApp</Link>
    </li>
  );
}
