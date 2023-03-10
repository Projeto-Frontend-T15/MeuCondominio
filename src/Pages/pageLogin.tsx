import { Login } from "../Components/Form/LoginForm";
import { Register } from "../Components/Form/RegisterForm";

function LoginPage() {
        
    return(
        <main>
            <section>
                <h2>Cadastro</h2>
                <Register/>
            </section>
            <section>
                <h2>Login</h2>
                <Login/>
            </section>
        </main>
    )
} 

export default LoginPage;