import styled from "styled-components";
import Navbar from "./Navbar";
import Menu from "./Menu";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";


export default function Today(){
    const {user} = useContext(UserContext)

    if(!user){
        return(
            <Container>
                <Navbar />
                Carregando
                <Menu />
            </Container> 
        );
    }
    return(
        <>
            <Container>
                <Navbar />
                
                <Menu />
            </Container>        
        </>
    );
}

const Container = styled.div`
    padding: 0px 18px;
    margin-top: 70px;
    background-color: #e5e5e5;
    height:100vh;
    font-family: 'Lexend Deca', sans-serif;
`;