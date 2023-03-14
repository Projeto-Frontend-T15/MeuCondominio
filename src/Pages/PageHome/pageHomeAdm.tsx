import { CondoPage } from "../../Components/Condo/CondoPage";;
import { MessagePage } from "../../Components/Messages/MessagesPage";
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
          <CondoPage />
          <MessagePage />
          <Maintenance />
        </div>
      </MainStyled>
    </>
  );
};

export default HomeAdm;
