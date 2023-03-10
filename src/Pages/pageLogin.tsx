import { useContext } from "react";
import { Login } from "../Components/Form/LoginForm";
import { Register } from "../Components/Form/RegisterForm";
import { userContext } from "../Contexts/userContext";

function LoginPage() {
    const {isAdmin} = useContext(userContext)
    console.log(isAdmin)
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