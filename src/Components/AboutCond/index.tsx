import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";


const AboutCond = () => {
    const {cashs} = useContext(ResidentContext)


    return(
        <h1>Olá</h1>
    )
}
export default AboutCond;