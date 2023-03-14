import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RegisterMessages } from "../../Components/Form/MessagensForm";
import Header from "../../Components/Header/header";
import { ListConds } from "../../Components/listConds";
import { ReadMessages } from "../../Components/MessagensAdm";
import { Messages } from "../../Components/MessagensAdm/messagens";

import { ModalComents } from "../../Components/ModalComents";
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
          <ReadMessages />
          <ModalComents />
          <RegisterMessages />
        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
