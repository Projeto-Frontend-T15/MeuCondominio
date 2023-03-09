import { iMessages } from "../../Contexts/interfacesResident";

export function MessagePageUser({ title, descripiton }: iMessages) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{descripiton}</p>
      <button type="button">Responder</button>
      <button type="button">Comentários</button>
    </li>
  );
}
