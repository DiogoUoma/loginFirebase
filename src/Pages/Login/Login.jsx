import { useState } from "react";

import "./login.css";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConnection";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, senha);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }
  if (user) {
    console.log(user);
  }

  return (
    <div className="container">
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#"> Esqueceu a senha? </a>
        </div>

        <button type="submit">Entrar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="Signup">Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
