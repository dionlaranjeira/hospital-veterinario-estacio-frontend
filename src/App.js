import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className ="titulo"  >Hospital Veterinário</h1>
      <h1 className ="titulo" >Estácio da Amazônias</h1>

      <form className="form-login"> 
        <input type="text" name="login" placeholder="Login" />
        <input type="password" name="senha" placeholder="Senha" />
        <p className="esqueciSenha"  >Esqueci a senha</p>
        <input  className="btnEntrar" type="submit" value="ENTRAR"/>
      </form>
      <p>Ou</p>
      <p className="cadastrese" >Cadastre-se</p>
    </div>
  );
}

export default App;
