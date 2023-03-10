import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";

export function Header() {
  const { logout } = useContext(ResidentContext);
  return (
    <header>
      <h1>Meu condomínio</h1>
      <div>
        <button>Histórico condominio</button>
        <button>Perfil</button>
        <button type="button" onClick={logout}>
          Sair
        </button>
      </div>
    </header>
  );
}
