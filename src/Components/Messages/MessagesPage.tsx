import { useContext, useEffect } from "react";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import { MessagesStyled } from "./styled";

export const MessagePage = () => {
  const { messages } = useContext(ResidentContext);
  const { modal, readAllMenssagens, idCond } = useContext(HomeContext);
  useEffect(() => {
    readAllMenssagens(idCond);
  }, [idCond]);
  return (
    <>
      <MessagesStyled></MessagesStyled>
    </>
  );
};
