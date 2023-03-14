<<<<<<< HEAD
import { useContext } from "react";
import { CondoPage } from "../../Components/Condo/CondoPage";
import Header from "../../Components/Header/header";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";
import { HomeContext } from "../../Contexts/homeContext";
=======
import { CondoPage } from "../../Components/Condo/CondoPage";;
import { MessagePage } from "../../Components/Messages/MessagesPage";
import { ListConds } from "../../Components/listConds";
import { ReadMessages } from "../../Components/MessagensAdm";
import { ModalComents } from "../../Components/ModalComents";
import ModalCreateCond from "../../Components/ModalCreateCond";
import { ResidentContext } from "../../Contexts/residentContext";
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a
import { MainStyled } from "./styled";
import { useContext } from "react";
import Header from "../../Components/Header/header";
import { RegisterMessages } from "../../Components/Form/MessagensForm";
import { Maintenance } from "../../Components/Maintenance";

const HomeAdm = () => {
<<<<<<< HEAD
  const { showCondo, showMessages, showImprovements } = useContext(HomeContext);
=======
  const { logout } = useContext(ResidentContext);

  const buttons = [
    { label: "Condomínio", onClick: () => console.log("Condomínio") },
    { label: "Manutenção", onClick: () => console.log("Manutenção") },
    { label: "Recados", onClick: () => console.log("Recados") },
    { label: "Sair", onClick: () => logout()},
  ];
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a

  return (
    <>
      <Header buttons={buttons} />
      <MainStyled>
        <div className="container_components">
<<<<<<< HEAD
          {showCondo && <CondoPage />}
          {showMessages && <MessagePage />}
          {showImprovements && <ImprovementsPage />}
=======
          <CondoPage />
          <MessagePage />
          <Maintenance />
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a
        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
