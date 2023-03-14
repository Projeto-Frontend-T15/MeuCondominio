import { useContext, useEffect } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { MessagePageUser } from "../MessagePageUser";
import { UlStyled } from "./style";

export function ListMessagesUserPage() {
  const { messages, messageApi } = useContext(ResidentContext);

  useEffect(() => {
    messageApi();
  }, []);

  return (
    <UlStyled>
      <h2>Quadro de recados</h2>
      {messages?.map((mess) => (
        <MessagePageUser
          condId={mess.condId}
          title={mess.title}
          descripiton={mess.descripiton}
          id={mess.id}
          userId={mess.userId}
          key={mess.id}
        />
      ))}
    </UlStyled>
  );
}
