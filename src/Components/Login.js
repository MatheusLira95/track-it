import styled from "styled-components";
import Logo from "../images/logo.png";
export default function Login(){
    return(
        <>
            <Container>
                <img src={Logo} alt="Track-it" />
                <input type="text" placeholder="email"></input>
                <input type="password" placeholder="senha"></input>
                <button>Entrar</button>
                <p>Não tem uma conta? Cadastre-se!</p>
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
    }
    p{
        color: #52b6ff;
        font-size: 13,98px;
        text-decoration: underline;
    }


`;