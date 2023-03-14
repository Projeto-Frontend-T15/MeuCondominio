import Header from "../../Components/Header/header";
import { ListMessagesUserPage } from "../../Components/ListMessagesUser/listMessage";
import { MainStyled, SectionStyled } from "./style";
import { Maintenance } from "../../Components/Maintenance";
import { Trustee } from "../../Components/Trustee";
import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";

const HomeUser = () => {
  const { logout } = useContext(ResidentContext);

  const buttons = [
    { label: "Histórico Condomínio", onClick: () => console.log("Histórico Condomínio") },
    { label: "Perfil", onClick: () => console.log("Perfil") },
    { label: "Sair", onClick: () => logout()},
  ];

  return (
    <>
      <Header buttons={buttons}/>
      <MainStyled>
        <SectionStyled>
          <ListMessagesUserPage />
        </SectionStyled>
        <aside>
          <Trustee />
          <Maintenance />
        </aside>
      </MainStyled>
    </>
  );
};

export default HomeUser;
