import { useContext } from "react";
import { CondoPage } from "../../Components/Condo/CondoPage";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";
import { HomeContext } from "../../Contexts/homeContext";
import { MainStyled } from "./styled";
import { ResidentContext } from "../../Contexts/residentContext";
import Header from "../../Components/Header/header";

const HomeAdm = () => {

  const { showCondo, showMessages, showImprovements } = useContext(HomeContext);

  const { logout } = useContext(ResidentContext);

  const buttons = [
    { label: "Condomínio", onClick: () => console.log("Condomínio") },
    { label: "Manutenção", onClick: () => console.log("Manutenção") },
    { label: "Recados", onClick: () => console.log("Recados") },
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
