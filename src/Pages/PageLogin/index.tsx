import { Link } from "react-router-dom";
import { Login } from "../../Components/Form/LoginForm";
import { Register } from "../../Components/Form/RegisterForm";
import { HeaderStyled, MainStyled } from "./styled";

function LoginPage() {
  return (
    <div>
      <HeaderStyled>
        <h2>Meu Condomínio</h2>
        <Link to="/">Home</Link>
      </HeaderStyled>

      <MainStyled>
        <section>
          <h2>Cadastro</h2>
          <Register />
        </section>
        <section>
          <h2>Login</h2>
          <Login />
        </section>
      </MainStyled>
    </div>
  );
}

export default LoginPage;
