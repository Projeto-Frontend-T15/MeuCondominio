import { useContext, FormEventHandler, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";

export function ListConds({ onSelect }: any) {
  const { register } = useForm();
  const { condo, setCondID, getAllCondos, getResidents, residents } =
    useContext(HomeContext);

  useEffect(() => {
    getAllCondos();
    getResidents();
    console.log(residents);
  }, []);

  const selectRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const selectedCondID = selectRef.current.value;
    setCondID(Number(selectedCondID));
    getResidents();
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="form"> Selecione o condominio</label>
      <select title="Condominio" name="select_condID" ref={selectRef}>
        {condo.map((cond) => (
          <option key={cond.id} value={cond.id}>
            {cond.name}
          </option>
        ))}
      </select>
      <button type="submit">Pesquisar</button>
    </form>
  );
}
