
import { useContext, useState } from "react";
import { HomeContext } from "../../Contexts/homeContext";
import { ResidentContext } from "../../Contexts/residentContext";


import { StyledHeader } from "./style";

interface ButtonProps {
  label: string;
  onClick: () => void;
}
interface iHeaderHome {
home: boolean;
}



const Header = ({ home }:iHeaderHome) => {
  const { logout } = useContext(ResidentContext);
  const { setShowCondo, setShowImprovements, setShowMessages } =
    useContext(HomeContext);

interface IHeader {
  buttons: ButtonProps[];
}






  return (
    <StyledHeader>
      <h1>Meu Condomínio</h1>

        {home === false ? (
          <button type="button">Entrar</button>
        ) : (
          <div className="buttons">

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
            <button type="button" onClick={logout}>
              Sair
            </button>
          </div>
        )}


    </StyledHeader>
  );
};

export default Header;