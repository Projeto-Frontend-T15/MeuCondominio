import { iMessages } from "../../Contexts/interfacesResident";

export function MessagePageUser({ title, descripiton }: iMessages) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{descripiton}</p>
      <div>
        <button>Responder</button>
        <button>Comentários</button>
      </div>
    </li>
  );
}
