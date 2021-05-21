import styled from "styled-components";
import Logo from "../images/logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";


export default function Login(){

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    const {user, setUser} = useContext(UserContext)

    const history = useHistory();
    function LogIn(){
        const body = {email, password}
        setDisabled(true);
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        request.catch(err => {
            alert("Login ou Senha errados. Tente novamente!")
            setDisabled(false);
        })
        request.then(resp => {
            history.push("/hoje")
            setUser(resp.data)
        })
    }
    
    return(
        <>
            <Container enabled={disabled}>
                <img src={Logo} alt="Track-it" />
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" disabled={disabled}></input>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="senha" disabled={disabled}></input>
                <button onClick={LogIn} disabled={disabled}>
                    {disabled ? <Loading /> : "Entrar"}
                </button>
                <p onClick={() => history.push("/cadastro")}>Não tem uma conta? Cadastre-se!</p>
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

    img{
        width: 180px;
        margin-bottom: 80px;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        outline: none;
        margin-bottom: 6px;
        font-size: 20px;
    }
    button{
        width: 303px;
        height: 45px;
        background-color: #52b6ff;
        font-size: 21px;
        color: #FFF;
        border: none;
        outline: none;
        border-radius: 5px;
        margin-bottom: 25px;
        opacity: ${props => props.enabled ? 0.6 : 1 };
    }
    p{
        color: #52b6ff;
        font-size: 13,98px;
        text-decoration: underline;
    }


`;