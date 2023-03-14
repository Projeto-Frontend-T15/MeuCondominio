import { useContext } from "react";
import { CondoPage } from "../../Components/Condo/CondoPage";
import Header from "../../Components/Header/header";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";

import { HomeContext } from "../../Contexts/homeContext";

import { MainStyled } from "./styled";

const HomeAdm = () => {
  const { showCondo, showMessages, showImprovements } = useContext(HomeContext);

  return (
    <>
      <Header home={true} />
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
