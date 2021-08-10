import styled from "styled-components";
import WeekDaysListed from "./WeekDaysListed";
import { TrashOutline } from "react-ionicons";
import CreatedHabContext from "../contexts/CreatedHabContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext } from "react";

export default function Habit({ flag, setFlag }) {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { createdHab, setHabsList, habsList } = useContext(CreatedHabContext);
  const { user } = useContext(UserContext);

  function deleteHab(i) {
    const resultado = window.confirm(
      "Deseja realmente excluir este hábito meu jovem?"
    );
    if (resultado) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const request = axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/habits/${habsList[i].id}`,
        config
      );
      request.then(() => {
        setFlag(false);
      });
      request.catch(() => {
        alert("Deu ruim!");
      });
    }
  }
  return (
    <>
      <Container>
        <ul>
          {habsList.map((hab, i) => {
            return (
              <HabitCard id={hab.id}>
                <p>{hab.name}</p>
                <WeekDaysListed id={i} hab={hab} />
                <TrashOutline
                  onClick={() => deleteHab(i)}
                  cssClasses="delete"
                />
              </HabitCard>
            );
          })}
        </ul>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  ul {
    width: 100%;
  }
`;

const HabitCard = styled.li`
  height: 91px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 10px;

  p {
    font-size: 19.98px;
    color: #666666;
    margin-bottom: 5px;
  }
  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 17px;
  }
`;
