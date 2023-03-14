
import { useContext } from "react";
import { HomeContext } from "../../../Contexts/homeContext";
import { iMessages } from "../../../Contexts/interfacesResident"
import { StyledLiMessages } from "./styled";

interface IMessagesProps{
    mess: iMessages;
}

export function Messages({mess}: IMessagesProps){
 
    const { deleteMessagens, setModal, readAllComents} = useContext(HomeContext)

    const renderCommentOfMenssages = () => {
        setModal(true)
        readAllComents(mess.id)
    }

    return(
        <StyledLiMessages>
            <h1>{mess.title}</h1>
            <span>{mess.descripiton}</span>
            <div>
                <button onClick={() => {deleteMessagens(mess.id)}}>Deletar Recado</button>
                
                <button onClick={() => {renderCommentOfMenssages()}} >Comentários</button>
            </div>
        </StyledLiMessages>
    )
}