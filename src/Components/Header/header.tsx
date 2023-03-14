import { useContext, useState } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { StyledHeader } from "./style";

interface IHeader {
  home: boolean;
}

const Header = ({ home }: IHeader) => {
  const { logout } = useContext(ResidentContext);

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
            <button type="button">Condomínio</button>
            <button type="button">Manutenção</button>
            <button type="button">Recados</button>
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
