import { useContext, useEffect } from "react";
import { HomeContext } from "../../../Contexts/homeContext";
import Resident from "./resident";

const ListResident = () => {
  const { residents, idCond, readAllResident } = useContext(HomeContext);

  const id = idCond?.condId;

  useEffect(() => {
    readAllResident(id);
  }, [idCond]);
  return (
    <>
    <h2>Moradores</h2>
      <ul>
        {residents.map((resident) => (
          <Resident resid={resident} key={resident.id} />
        ))}
      </ul>
    </>
  );
};
export default ListResident;
