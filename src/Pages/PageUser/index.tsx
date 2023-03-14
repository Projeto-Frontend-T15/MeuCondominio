import Header from "../../Components/Header/header";
import { ListMessagesUserPage } from "../../Components/ListMessagesUser/listMessage";
import { MainStyled, SectionStyled } from "./style";
import { Maintenance } from "../../Components/Maintenance";
import { Trustee } from "../../Components/Trustee";
import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { ModalProfile } from "../../Components/ModalProfile";

const HomeUser = () => {
  const { logout, setModal, modal } = useContext(ResidentContext);

  const buttons = [
    { label: "Histórico Condomínio", onClick: () => console.log("Histórico Condomínio") },
    { label: "Perfil", onClick: () => setModal(true)},
    { label: "Sair", onClick: () => logout()},
  ];

  return (
    <>
      <Header home={true}/>
      {modal && <ModalProfile/>}
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
