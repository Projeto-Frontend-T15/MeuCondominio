import { iComments } from "../../../Contexts/interfacesResident";

interface ICommentProps{
    com: iComments;
}
export function Comment({com}: ICommentProps){
    return(
        <h1>{com.comment}</h1>
    )
}