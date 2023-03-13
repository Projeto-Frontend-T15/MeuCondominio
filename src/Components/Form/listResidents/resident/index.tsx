import { IResident } from "../../../../Contexts/homeContext";

interface IResidentProps{
    resid: IResident
}

const  Resident = ({resid}: IResidentProps) => {
    return(
        <h1>{resid.name}</h1>
    )
}
export default Resident;