import { useContext, FormEventHandler, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";
import { StyledForm } from "./styled";

export function ListConds() {

  const { register, handleSubmit } = useForm();
  const { condo, condID, setCondID, getAllCondos, getResidents, residents,readAllMessages } =
    useContext(HomeContext);

  useEffect(() => {
    getAllCondos();
    getResidents();
  }, []);

  const selectRef = useRef(0);
/*
  const handleSearch = (e) => {
    e.preventDefault();
    const selectedCondID = Number(selectRef.current.value);
    setCondID(selectedCondID);
    readAllMessages(selectedCondID)
*/
  const handleSearch = () => {
    const selectedCondID = Number(selectRef.current.value);
    setCondID(selectedCondID);
    readAllMessages(selectedCondID)
    getResidents();
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(handleSearch)}>
        <select title="Condominio" name="select_condID" ref={selectRef}>
          <option>Selecione o condominio</option>
          {condo.map((cond) => (
            <option key={cond.id} value={cond.id}>
              {cond.name}
            </option>
          ))}
        </select>
        <button type="submit">Pesquisar</button>
      </form>
    </StyledForm>
  );
}
