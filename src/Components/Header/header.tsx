<<<<<<< HEAD
import { useContext, useState } from "react";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
=======
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a
import { StyledHeader } from "./style";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

<<<<<<< HEAD
const Header = ({ home }: IHeader) => {
  const { logout } = useContext(ResidentContext);
  const { setShowCondo, setShowImprovements, setShowMessages } =
    useContext(HomeContext);
=======
interface IHeader {
  buttons: ButtonProps[];
}
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a

const Header: React.FC<IHeader> = ({ buttons }) => {

  return (
    <StyledHeader>
      <h1>Meu Condomínio</h1>
      <div className="buttons">
<<<<<<< HEAD
        {home === false ? (
          <button type="button">Entrar</button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                setShowMessages(false);
                setShowImprovements(false);
                setShowCondo(true);
              }}
            >
              Condomínio
            </button>
            <button
              type="button"
              onClick={() => {
                setShowMessages(false);
                setShowImprovements(true);
                setShowCondo(false);
              }}
            >
              Manutenção
            </button>
            <button
              type="button"
              onClick={() => {
                setShowMessages(true);
                setShowImprovements(false);
                setShowCondo(false);
              }}
            >
              Recados
            </button>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </>
        )}
=======
        {buttons.map((button) => (
          <button key={button.label} onClick={button.onClick}>
            {button.label}
          </button>
        ))}
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a
      </div>
    </StyledHeader>
  );
};

export default Header;