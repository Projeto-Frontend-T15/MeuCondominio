import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RegisterMessages } from "../../Components/Form/MessagensForm";
import Header from "../../Components/Header/header";
import { ListConds } from "../../Components/listConds";
import { ReadMessagens } from "../../Components/MessagensAdm";

import { ModalComents } from "../../Components/ModalComents";
import ModalCreateCond from "../../Components/ModalCreateCond";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import { MainStyled } from "./styled";

const HomeAdm = () => {
  const { messages } = useContext(ResidentContext);
  const { modal, readAllMenssagens, idCond } = useContext(HomeContext);

  useEffect(() => {
    readAllMenssagens(idCond);
  }, [idCond]);
  return (
    <>
      <Header home={true} />
      <MainStyled>
        <div className="container_components">
          <ListConds />
          {messages ? <ReadMessagens /> : <p>Ainda não existe recados</p>}
          {modal && <ModalComents />}
          <RegisterMessages />
          <ModalCreateCond />
        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
