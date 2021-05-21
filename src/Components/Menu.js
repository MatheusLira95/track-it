import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu({ todayHabs, doneHabs }) {
    const history = useHistory();
    return (
        <>
            <MenuBar>
                <p onClick={() => history.push("/habitos")}>Hábitos</p>
                <p onClick={() => history.push("/historico")}>Histórico</p>
                <Hoje onClick={() => history.push("/hoje")}>
                    <CircularProgressbar
                        value={(doneHabs.length / todayHabs.length) * 100}
                        text={"Hoje"}
                        backgroundPadding={6}
                        background
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </Hoje>
            </MenuBar>
        </>
    );
}
const MenuBar = styled.div`
    background-color: #fff;
    height: 70px;
    width: 100%;
    padding: 0px 30px;
    font-size: 17.98px;

    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #52b6ff;
`;

const Hoje = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 50px;
    background-color: #52b6ff;
    position: fixed;
    bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
