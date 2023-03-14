import { CondoPage } from "../../Components/Condo/CondoPage";
import Header from "../../Components/Header/header";
import { MaintenancePage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";
import { ListConds } from "../../Components/listConds";
import { ReadMessages } from "../../Components/MessagensAdm";
import { ModalComents } from "../../Components/ModalComents";
import ModalCreateCond from "../../Components/ModalCreateCond";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";

import { MainStyled } from "./styled";

const HomeAdm = () => {
  return (
    <>
      <Header home={true} />
      <MainStyled>
        <div className="container_components">
          <ListConds />
          {messages ? <ReadMessages /> : <p>Ainda não existe recados</p>}
          {modal && <ModalComents />}
          <RegisterMessages />
          <ModalCreateCond />
        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
