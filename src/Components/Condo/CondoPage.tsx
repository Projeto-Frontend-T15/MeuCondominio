import { RegisterMessages } from "../Form/MessagensForm";
import { ListConds } from "../listConds";
import { ReadMessages } from "../MessagensAdm";
import { MessagePage } from "../Messages/MessagesPage";
import { ModalComents } from "../ModalComents";
import { CondoStyled } from "./styled";

export const CondoPage = () => {
  
  return (
    <>
      <CondoStyled>
        <RegisterMessages />
        <ListConds />
        <ReadMessages />

      </CondoStyled>
    </>
  );
};