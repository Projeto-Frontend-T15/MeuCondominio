import { useContext, useState } from "react";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";
import { StyledHeader } from "./style";

interface IHeader {
  home: boolean;
}

const Header = ({ home }: IHeader) => {
  const { logout } = useContext(ResidentContext);
  const { setShowCondo, setShowImprovements, setShowMessages } =
    useContext(HomeContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledHeader>
      <h1>Meu Condomínio</h1>
      <div className="buttons">
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
      </div>
    </StyledHeader>
  );
};

export default Header;
