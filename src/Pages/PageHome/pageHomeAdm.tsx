import { CondoPage } from "../../Components/Condo/CondoPage";
import Header from "../../Components/Header/header";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
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
          <CondoPage />
          <MessagePage />
          <ImprovementsPage />

        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
