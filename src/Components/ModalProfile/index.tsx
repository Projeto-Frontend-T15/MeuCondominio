import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { ButtonClose, ContainerModal, ModalStyled } from "./style";

export function ModalProfile() {
  const { setModal, userLogin } = useContext(ResidentContext);


  return (
    <ModalStyled>
      <ContainerModal>
        <div>
          <h2>Perfil</h2>
          <ButtonClose onClick={() => setModal(false)}>X</ButtonClose>
        </div>
        <div>
            <h3>Nome: <span>{userLogin.name}</span></h3>
            <p>Email: <span>{userLogin.email}</span></p>
        </div>
      </ContainerModal>
    </ModalStyled>
  );
}
