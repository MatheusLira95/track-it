import styled from "styled-components";
import Navbar from "./Navbar";
import Menu from "./Menu";
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { VscCheck } from "react-icons/vsc";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import calendar from "dayjs/plugin/calendar";
import Loader from "react-loader-spinner";

export default function Today() {
  dayjs.extend(calendar);
  const { user, setTodayHabs, todayHabs, doneHabs, setDoneHabs } =
    useContext(UserContext);
  const [flag, setFlag] = useState(true);

  const done = todayHabs.filter((hab) => hab.done);
  const percent = (doneHabs.length / todayHabs.length) * 100;
  useEffect(() => {
    setDoneHabs([...done]);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const request = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/habits/today`,
      config
    );
    request.then((resp) => {
      setTodayHabs(resp.data);
      setFlag(false);
    });
    request.catch((err) => {});
  }, [flag]);

  function Done(hab) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (!hab.done) {
      const request = axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/habits/${hab.id}/check`,
        {},
        config
      );
      request.then((resp) => {
        setFlag(true);
        setDoneHabs(done);
      });
    }
    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/habits/${hab.id}/uncheck`,
      {},
      config
    );
    request.then((resp) => {
      setFlag(true);
      setDoneHabs(done);
    });
  }

  return (
    <>
      <Container>
        <Navbar />
        {flag ? (
          <>
            <Header>
              <p className="week-day">
                {dayjs().locale("pt").format("dddd").replace("-feira", "")},{" "}
                {dayjs().calendar(dayjs("2019-09-21"), {
                  sameElse: "DD/MM",
                })}
              </p>
              <p className="no-today">Nenhum hábito concluido ainda!</p>
            </Header>
            <p className="loading">
              {" "}
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </p>
          </>
        ) : (
          <>
            <Header percent={percent}>
              <p className="week-day">
                {dayjs().locale("pt").format("dddd").replace("-feira", "")},{" "}
                {dayjs().calendar(dayjs("2019-09-21"), {
                  sameElse: "DD/MM",
                })}
              </p>
              <p className="no-today">Nenhum hábito concluido ainda!</p>
              <p className="today">
                {percent
                  ? percent.toFixed(2) + " %dos hábitos concluídos"
                  : "Nenhum hábito para hoje"}
              </p>
            </Header>
            <TodayHabList>
              {todayHabs.map((hab, i) => {
                return (
                  <TodayHab
                    selected={hab.done}
                    recordEqual={hab.currentSequence === hab.highestSequence}
                  >
                    <CheckBox done={hab.done} onClick={() => Done(hab)}>
                      <VscCheck className="icon"></VscCheck>
                    </CheckBox>
                    <p className="title">{hab.name}</p>
                    <p>
                      Sequencia atual: <span>{hab.currentSequence} dias</span>
                    </p>
                    <p>
                      Seu recorde:
                      <span className="record">{hab.highestSequence} dias</span>
                    </p>
                  </TodayHab>
                );
              })}
            </TodayHabList>
          </>
        )}
        <Menu todayHabs={todayHabs} doneHabs={doneHabs} />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0px 18px;
  margin-top: 70px;
  background-color: #e5e5e5;
  height: 100vh;
  font-family: "Lexend Deca", sans-serif;
  .loading {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 70px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .week-day {
    font-size: 22.98px;
    color: #126ba5;
    margin-bottom: 5px;
  }
  .no-today {
    display: ${(props) => (props.percent === 0 ? "block" : "none")};
    color: #bababa;
    font-size: 17.98px;
  }
  .today {
    display: ${(props) => (props.percent === 0 ? "none" : "block")};
    color: #8fc549;
    font-size: 17.98px;
  }
`;

const TodayHabList = styled.ul`
  margin-top: 30px;
  width: 100%;
`;

const TodayHab = styled.li`
  width: 100%;
  height: 94px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;

  p {
    color: #666;
    font-size: 13px;
    margin-left: 10px;
  }
  .title {
    font-size: 20px;
    color: #666;
    margin-bottom: 15px;
  }
  span {
    color: ${(props) => (props.selected ? "#8FC549" : "#666")};
  }
  .record {
    color: ${(props) => (props.recordEqual ? "#8FC549" : "#666")};
  }
`;

const CheckBox = styled.div`
  height: 69px;
  width: 69px;
  background-color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  position: absolute;
  top: 12px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  .icon {
    color: #fff;
    font-size: 50px;
  }
`;
