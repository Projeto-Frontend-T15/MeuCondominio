import { useContext, useEffect } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { MessagePageUser } from "../messagePageUser";

export function ListMessagesUserPage() {
  const { messages, messageApi } = useContext(ResidentContext);

  useEffect(() => {
    messageApi();
  }, []);
  
  return (
    <ul>
      {messages?.map((mess) => (
        <MessagePageUser
          condId={mess.condId}
          title={mess.title}
          descripiton={mess.descripiton}
          id={0}
          userId={mess.userId}
          key={mess.id}
        />
      ))}
    </ul>
  );
}
