import { iMessages } from "../../Contexts/interfacesResident";
import { LiStyled } from "./style";

export function MessagePageUser({ title, descripiton }: iMessages) {
  return (
    <LiStyled>
      <h3>{title}</h3>
      <p>{descripiton}</p>
      <div>
        <button>Responder</button>
        <button>Comentários</button>
      </div>
    </LiStyled>
  );
}
