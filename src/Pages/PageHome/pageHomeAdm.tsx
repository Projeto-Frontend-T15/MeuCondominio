
import { useContext } from "react";

import { CondoPage } from "../../Components/Condo/CondoPage";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";
import { HomeContext } from "../../Contexts/homeContext";
import { MainStyled } from "./styled";
import Header from "../../Components/Header/header";

const HomeAdm = () => {
  const { showCondo, showMessages, showImprovements} = useContext(HomeContext);
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
