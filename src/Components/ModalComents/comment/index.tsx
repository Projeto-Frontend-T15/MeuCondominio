import { iComments } from "../../../Contexts/interfacesResident";

interface ICommentProps{
    com: iComments;
}
export function Comment({com}: ICommentProps){
    return(
        <li>
            <p>{com.id}</p>
            <h1>{com.comment}</h1>
        </li>
        
    )
}