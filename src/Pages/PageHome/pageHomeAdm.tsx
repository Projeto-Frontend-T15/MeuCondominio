import { CondoPage } from "../../Components/Condo/CondoPage";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";
import { HomeContext } from "../../Contexts/homeContext";
import { ListConds } from "../../Components/listConds";
import { ReadMessages } from "../../Components/MessagensAdm";
import { ModalComents } from "../../Components/ModalComents";
import ModalCreateCond from "../../Components/ModalCreateCond";
import { ResidentContext } from "../../Contexts/residentContext";
import { MainStyled } from "./styled";
import { useContext } from "react";
import Header from "../../Components/Header/header";
import { RegisterMessages } from "../../Components/Form/MessagensForm";
import { Maintenance } from "../../Components/Maintenance";

const HomeAdm = () => {
  const { showCondo, showMessages, showImprovements, setShowCondo, setShowImprovements, setShowMessages } = useContext(HomeContext);
  const { logout } = useContext(ResidentContext);

  const buttons = [
    { label: "Condomínio", onClick: () => {
      setShowMessages(false);
      setShowImprovements(false);
      setShowCondo(true);
    }},
    { label: "Manutenção", onClick: () => {
      setShowMessages(false);
      setShowImprovements(true);
      setShowCondo(false);
    }},
    { label: "Recados", onClick: () => {
      setShowMessages(true);
      setShowImprovements(false);
      setShowCondo(false);
    }},
    { label: "Sair", onClick: () => logout()},
  ];

  return (
    <>
      <Header buttons={buttons} />
      <MainStyled>
        <div className="container_components">
          {showCondo && <CondoPage />}
          {showMessages && <MessagePage />}
          {showImprovements && <ImprovementsPage />}
        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
