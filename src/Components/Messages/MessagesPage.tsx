import { useContext, useEffect } from "react";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import { MessagesStyled } from "./styled";

export const MessagePage = () => {
  const { messages, comments } = useContext(ResidentContext);
  const { idCond, deleteMessagens, messagesRegister } = useContext(HomeContext);
  // renderizar mensagens, com comentarios em baixo, possibilidade para excluir mensagens e formulario para adicionar novas
  return (
    <>
      <MessagesStyled></MessagesStyled>
    </>
  );
};
