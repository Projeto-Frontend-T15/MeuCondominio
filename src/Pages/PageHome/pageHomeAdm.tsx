import { CondoPage } from "../../Components/Condo/CondoPage";
import Header from "../../Components/Header/header";
import { ImprovementsPage } from "../../Components/Maintenance/MaintenancePage";
import { MessagePage } from "../../Components/Messages/MessagesPage";
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
