
import { useContext } from "react";
import { HomeContext } from "../../../Contexts/homeContext";
import { iMessages } from "../../../Contexts/interfacesResident"

interface IMessagensProps{
    mess: iMessages;
}

export function Messagens({mess}: IMessagensProps){
 
    const { deleteMessagens, setModal, readAllComents} = useContext(HomeContext)

    const renderCommentOfMenssages = () => {
        setModal(true)
        readAllComents(mess.id)
    }

    return(
        <li>
            <h1>{mess.title}</h1>
            <span>{mess.descripiton}</span>
            <div>
                <button onClick={() => {deleteMessagens(mess.id)}}>Deletar Recado</button>
                
                <button onClick={() => {renderCommentOfMenssages()}} >Comentários</button>
            </div>
        </li>
    )
}