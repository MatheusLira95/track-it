import styled from "styled-components";
import Navbar from "./Navbar";
import CreateHabits from "./CreateHabits";
import Habit from "./Habit";
import Menu from "./Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import CreatedHabContext from "../contexts/CreatedHabContext";

export default function Habits() {
  const { user, todayHabs, doneHabs } = useContext(UserContext);
  const { setHabsList, habsList } = useContext(CreatedHabContext);
  const [enableCreate, setEnableCreate] = useState(false);
  const [flag, setFlag] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  useEffect(() => {
    const request = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/habits`,
      config
    );

    request.then((resp) => {
      setHabsList([...resp.data]);
      setFlag(true);
    });
  }, [flag, setHabsList]);

  return (
    <>
      <Container>
        <Navbar />
        <Header>
          <p>Meus hábitos</p>
          <button onClick={() => setEnableCreate(true)}>+</button>
        </Header>
        <CreateHabits
          flag={flag}
          enableCreate={enableCreate}
          setFlag={setFlag}
          setEnableCreate={setEnableCreate}
        />
        <Habit flag={flag} setFlag={setFlag} />
        <NoHabits habsList={habsList}>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NoHabits>
        <Menu todayHabs={todayHabs} doneHabs={doneHabs} />
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 0px 18px;
  margin-top: 70px;
  background-color: #e5e5e5;
  height: 650px;
  font-family: "Lexend Deca", sans-serif;
  z-index: -1;
  overflow: scroll;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #126ba5;
    font-size: 22.98px;
    font-family: "Lexend Deca", sans-serif;
  }
  button {
    font-size: 26.98px;
    color: #fff;
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
  }
`;

const NoHabits = styled.div`
  font-size: 17.98px;
  font-family: "Lexend Deca", sans-serif;
  color: #666666;
  display: ${(props) => (props.habsList.length === 0 ? "block" : "none")};
`;
