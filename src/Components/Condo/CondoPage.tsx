import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import api from "../../services/api";
import { Register } from "../Form/RegisterForm";
import { SelectCondo } from "../Form/RegisterForm/SelectCondo";
import { ListConds } from "../listConds";
import ModalCreateCond from "../ModalCreateCond";
import { CardResident } from "./Card Residents/cardResidents";
import { CondoStyled } from "./styled";

export const CondoPage = () => {
  const {
    newCond,
    condo,
    setResidents,
    residents,
    setShowCreateCond,
    showCreateCond,
    getAllCondos,
  } = useContext(HomeContext);
  const { userLogin } = useContext(ResidentContext);

  const {
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllCondos();
    console.log(condo);
  }, []);

  return (
    <>
      <CondoStyled>
        <div className="div_main">
          <h1>Condominio</h1>
          <div className="container_header">
            <ListConds />
            <button
              className="btn_openModal"
              type="submit"
              onClick={() => setShowCreateCond(true)}
            >
              Criar condominio
            </button>
          </div>

          <h2>Residentes</h2>
          <ul>
            {residents &&
              residents.map((resident) => {
                console.log(resident);
                return (
                  <CardResident
                    name={resident.name}
                    email={resident.email}
                    key={resident.id}
                  />
                );
              })}
          </ul>
        </div>
      </CondoStyled>
      <ModalCreateCond />
    </>
  );
};
