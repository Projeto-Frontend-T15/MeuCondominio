import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { Messages } from "./messagens";
import { StyledDivMessagens, StyledUl } from "./styled";

export function ReadMessages() {
  const { messages, comments } = useContext(ResidentContext);

  return (
    <StyledDivMessagens>
      <h3>Quadro de Recados</h3>
      <StyledUl>
        {messages.map((mess) => (
          <Messages mess={mess} key={mess.id} />
        ))}
      </StyledUl>
   
    </StyledDivMessagens>

  );
}
