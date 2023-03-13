import { useContext } from "react"
import { ResidentContext } from "../../Contexts/residentContext"
import { Messagens } from "./messagens"

export function ReadMessagens(){

    const {messages, comments} = useContext(ResidentContext)

    return(
        <ul>
            {
                messages.map((mess) => (
                    <Messagens mess={mess} key={mess.id} />
                ))
            }
        </ul>
    )
}