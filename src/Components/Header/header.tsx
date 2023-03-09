import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { StyledHeader } from "./style";

interface IHeader {
  home: boolean;
}

const Header = ({ home }: IHeader) => {
  const { userLogout } = useContext(ResidentContext);
  const handleLogout = () => {
    userLogout();
  };

  return (
    <StyledHeader>
      <h1>Meu Condominio</h1>
      <div className="buttons">
        {home === true ? (
          <button type="button">Entrar</button>
        ) : (
          <>
            <button type="button">Condominio</button>
            <button type="button">Manutencao</button>
            <button type="button">Perfil</button>
            <button type="button">Avisos</button>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
