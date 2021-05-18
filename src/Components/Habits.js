import styled from "styled-components";
import Navbar from "./Navbar";
import Menu from "./Menu";

export default function Habits(){
    return(
        <>
            <Container>
                <Navbar />
                <Header>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </Header>
                <NoHabits>
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </NoHabits>
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

const Header = styled.div`
    width:100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        color: #126ba5;
        font-size: 22.98px;
        font-family: 'Lexend Deca', sans-serif;
    }
    button{
        font-size: 26.98px;
        color: #fff;
        width: 40px;
        height: 35px;
        background-color: #52b6ff;
        display: flex;
        justify-content: center;
        align-items:center;
        border:none;
        border-radius: 5px;
    }
`;

const NoHabits = styled.div`
    font-size: 17.98px;
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
`;