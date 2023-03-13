import { Link } from "react-router-dom";
import { HeaderStyled, MainStyled } from "./style";

const LandingPage = () => {
  return (
    <div>
      <HeaderStyled>
        <h2>Meu Condomínio</h2>
        <Link to="/login">Entrar</Link>
      </HeaderStyled>

      <MainStyled>
        <div>
          <h3>O Aplicativo que facilita sua comunicação dentro do seu condomínio</h3>
        </div>
        <div>
          <h3>Fique atualizado sobre os comunicados em primeira mão</h3>
        </div>
      </MainStyled>
    </div>
  );
};

export default LandingPage;
