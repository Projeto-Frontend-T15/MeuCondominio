import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { Messages } from "./messagens";

export function ReadMessages() {
  const { messages, comments } = useContext(ResidentContext);

  return (
    <>
      <h3>Recados</h3>
      <ul>
        {messages.map((mess) => (
          <Messages mess={mess} key={mess.id} />
        ))}
      </ul>
    </>
  );
}
