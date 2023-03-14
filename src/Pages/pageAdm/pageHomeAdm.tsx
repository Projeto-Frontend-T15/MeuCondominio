import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListResident from "../../Components/Form/listResidents";

import { RegisterMessages } from "../../Components/Form/MessagensForm";

import { ListConds } from "../../Components/listConds";
import { ReadMessagens } from "../../Components/MessagensAdm";

import { ModalComents } from "../../Components/ModalComents";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import { HeaderStyledPageAdmin, MainStyled } from "./styled";

const HomeAdm = () => {
  const { messages } = useContext(ResidentContext);
  const { modal, readAllMenssagens, idCond } = useContext(HomeContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@Token");
    localStorage.removeItem("@user");
    navigate("/login");
  };
  useEffect(() => {
    readAllMenssagens(idCond);
  }, [idCond]);
  return (
    <>
      <HeaderStyledPageAdmin>
        <h2>Meu Condomínio</h2>
        <button
          onClick={() => {
            logout();
          }}
        >
          Sair
        </button>
      </HeaderStyledPageAdmin>
      <MainStyled>
        <RegisterMessages />
        <div>
            <ListConds />
            <ListResident />
        </div>
        
      </MainStyled>
      {messages ? <ReadMessagens /> : <p>Ainda não existe recados</p>}
        {modal && <ModalComents />}
    </>
  );
};

export default HomeAdm;
