
import { Button } from "../components/Button"
import "../styles/cadastroUsuario.css";
export function CadastroUsuario(){

    return(
        <div className="conteiner" >
            

            <form className="formulario" >
            <h1>Dados Cadastrais</h1>
                <div className="tipoCliente" >
                <span> 
                    <input 
                    type="radio" 
                    name="tipoUsuario" 
                    value="veterinario" /> Veterinário 
                </span>
                <span> 
                    <input 
                    type="radio" 
                    name="tipoUsuario"
                     value="cliente" /> 
                     Cliente 
                </span>
                </div>
               <p> <input type="text" name="nome" placeholder="Nome" /> </p>
               <p> <input type="text" name="login" placeholder="Login" /> </p>
                <p> <input type="password" name="senha" placeholder="Senha" /> </p>

                <Button/>

            </form>

        </div>
    )
}