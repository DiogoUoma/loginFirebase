import { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConnection";

import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleAdd(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, senha);
  }

  if (loading) {
    return <p style={{ color: "#fff" }}>Carregando...</p>;
  }

  return (
    <div className="container">
      <form onSubmit={handleAdd}>
        <h1>Cadastro</h1>
        <div className="input-field">
          <input
            type="string"
            placeholder="Nome completo"
            value={nome}
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            id="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Cadastre-se</button>
        <div className="login-link">
          <Link to="/">Voltar para o Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
