import { useContext, useEffect } from "react";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import { ListConds } from "../listConds";
import { CardMessageUser } from "./CardMessagesUser/cardMessageUser";
import { MessagesStyled } from "./styled";

export const MessagePage = () => {
  const { messages, comments } = useContext(ResidentContext);
  const {
    idCond,
    deleteMessagens,
    messagesRegister,
    readAllMessages,
    setShowCreateImp,
  } = useContext(HomeContext);
  useEffect(() => {
    readAllMessages();
  }, []);
  // renderizar mensagens, com comentarios em baixo, possibilidade para excluir mensagens e formulario para adicionar novas
  return (
    <>
      <MessagesStyled>
      <h1>Recados</h1>

        <ListConds />
        <button
          onClick={() => {
            console.log("oi");
            setShowCreateImp(true);
          }}
        >
          Criar Recado
        </button>
        {messages.map((message) => {
          return (
            <>
              <ul>
                <CardMessageUser
                  title={message.title}
                  description={message.descripiton}
                  id={message.id}
                  key={message.id}
                  condID={message.condID}
                />
              </ul>
            </>
          );
        })}
      </MessagesStyled>
    </>
  );
};
