import styled from "styled-components";
import axios from "axios";
import Logo from "../images/logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";


export default function Register(){
    const [email, setEmail] = useState(""); 
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false)

    const history = useHistory();

    function Subscribe(){
        const body = {email, name, image, password};
        console.log(body)
        setDisabled(true)
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        request.then(() => {
            history.push("/")
        })
        request.catch((err) => {
            alert("Dados inseridos incorretamente, tente novamente.")
            setDisabled(false)
        })
        
    }

    return(
        <>
            <Container enabled={disabled} >
                <img src={Logo} alt="Track-it" />
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" disabled={disabled}></input>
                <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="senha" disabled={disabled}></input>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="nome" disabled={disabled}></input>
                <input onChange={(e) => setImage(e.target.value)} type="text" placeholder="foto" disabled={disabled}></input>
                <button onClick={Subscribe} disabled={disabled}>
                    {disabled ? <Loading /> : "Cadastrar"}
                </button>
                <p onClick={() => history.push("/")}>Já tem uma conta? Faça login!</p>
            </Container>    
        </>
    );
}

const Container = styled.div`
    display: flex;
    height: 80vh;
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
        padding: 0px 10px;
        color: #505050;
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
//