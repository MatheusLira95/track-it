import styled from "styled-components";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function History() {
    const { todayHabs, doneHabs } = useContext(UserContext);
    return (
        <>
            <>
                <Navbar />
                <Container>
                    <Header>
                        <p className="title">Historico</p>
                    </Header>
                    <Text>
                        Em breve você poderá ver o histórico dos seus hábitos
                        aqui!
                    </Text>
                </Container>
                <Menu todayHabs={todayHabs} doneHabs={doneHabs} />
            </>
        </>
    );
}
const Container = styled.div`
    padding: 0px 18px;
    margin-top: 70px;
    background-color: #e5e5e5;
    height: 100vh;
    font-family: "Lexend Deca", sans-serif;
`;

const Header = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 70px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        font-size: 22.98px;
        color: #126ba5;
        margin-bottom: 5px;
    }
`;

const Text = styled.ul`
    margin-top: 30px;
    width: 100%;
    color: #666;
`;
