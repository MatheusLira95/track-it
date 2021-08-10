import styled from "styled-components";
import Logo from "../images/logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { user, setUser, setTodayHabs } = useContext(UserContext);

  const history = useHistory();
  function LogIn(e) {
    e.preventDefault();
    const body = { email, password };
    setDisabled(true);
    const requestUser = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
      body
    );
    requestUser.catch((err) => {
      alert("Login ou Senha errados. Tente novamente!");
      setDisabled(false);
    });
    requestUser.then((resp) => {
      setUser(resp.data);
      // setTimeout(() => {
      history.push("/hoje");
      // }, 3000);
    });
  }

  return (
    <>
      <Container enabled={disabled}>
        <img src={Logo} alt="Track-it" />
        <form onSubmit={LogIn}>
          <label>Usuário</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            disabled={disabled}
          ></input>
          <br />
          <label>Senha</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="senha"
            disabled={disabled}
          ></input>
          <button type="submit" disabled={disabled}>
            {disabled ? <Loading /> : "Entrar"}
          </button>
        </form>
        <p onClick={() => history.push("/cadastro")}>
          Não tem uma conta? Cadastre-se!
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 10px;

  img {
    width: 180px;
    margin-bottom: 80px;
  }
  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none;
    margin-bottom: 6px;
    font-size: 20px;
  }
  button {
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    font-size: 21px;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 25px;
    opacity: ${(props) => (props.enabled ? 0.6 : 1)};
  }
  p {
    color: #52b6ff;
    font-size: 13, 98px;
    text-decoration: underline;
  }
  label {
    font-size: 20px;
    color: #666;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
