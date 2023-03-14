import { useContext } from "react"
import { HomeContext } from "../../Contexts/homeContext"
import { ResidentContext } from "../../Contexts/residentContext"
import { Comment } from "./comment"
import { StyledModalComments } from "./styled"

export function ModalComents(){

    const {comments} = useContext(ResidentContext)
    const {setModal} = useContext(HomeContext)
    return(
        <StyledModalComments>
                    <dialog>
            <div>
                <h2>Comentários</h2>
                <button onClick={() => {setModal(false)}}>x</button>
            </div>
            <ul>
                {
                    comments ? (
                        comments.map((comment) => (
                            <Comment com={comment} key={comment.id}/>
                        ))
                    ):(
                        <p>Não existe comentários</p>
                    )
                }
            </ul>
        </dialog>
        </StyledModalComments>

    )
}