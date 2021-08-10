import { useState, useContext } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import WeekDays from "./WeekDays";
import CreatedHabContext from "../contexts/CreatedHabContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function CreateHabits({
  enableCreate,
  setEnableCreate,
  flag,
  setFlag,
}) {
  const [habitName, setHabitName] = useState();
  const [habitDays, setHabitDays] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const { createdHab, setCreatedHab } = useContext(CreatedHabContext);
  const { user, setUser } = useContext(UserContext);

  function saveHabit() {
    setDisabled(true);
    const days = createdHab.map((i) => i - 1);
    const body = {
      name: habitName,
      days,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/habits`,
      body,
      config
    );

    request.then((resp) => {
      alert("Hábito adicionado com sucesso");
      setDisabled(false);
      setCreatedHab([]);
      setHabitName("");
      setFlag(false);
      setEnableCreate(false);
    });
    request.catch((err) => {
      alert("Dados inseridos incorretamente, tente de novo!");
      setDisabled(false);
    });
  }
  return (
    <>
      <CreateHabit enableCreate={enableCreate}>
        <input
          onChange={(e) => setHabitName(e.target.value)}
          type="text"
          placeholder="nome do hábito"
          value={habitName}
          disabled={disabled}
        ></input>
        <WeekDays setHabitDays={setHabitDays} habitDays={habitDays} />
        <BottomButtons disable={disabled}>
          <button
            className="cancel"
            onClick={() => setEnableCreate(false)}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className="save"
            onClick={() => saveHabit()}
            disabled={disabled}
          >
            {disabled ? <Loading /> : "Salvar"}
          </button>
        </BottomButtons>
      </CreateHabit>
    </>
  );
}

const CreateHabit = styled.div`
  width: 100%;
  height: 180px;
  background-color: #fff;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 26px;
  display: ${(props) => (props.enableCreate ? "block" : "none")};

  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size: 19.98px;
    padding: 0px 10px;
    outline: none;
  }
  ul {
    display: flex;
    margin-top: 5px;
  }
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
  button {
    margin-left: 20px;
    width: 84px;
    height: 35px;
    border-radius: 4px;
    border: none;
    outline: none;
    opacity: ${(props) => (props.disable ? 0.6 : 1)};
  }
  .cancel {
    background-color: #fff;
    color: #52b6ff;
    font-size: 15px;
  }
  .save {
    background-color: #52b6ff;
    color: #fff;
    font-size: 15px;
  }
`;
