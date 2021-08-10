import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
export default function Navbar() {
  const { user } = useContext(UserContext);

  if (!user) {
    return "Carregando";
  }
  return (
    <>
      <Bar>
        <p>TrackIt</p>
        <img className="user" src={user.image} alt="UserFoto" />
      </Bar>
    </>
  );
}

const Bar = styled.div`
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  background-color: #126ba5;
  z-index: 2;

  p {
    color: #fff;
    font-family: "Playball";
    font-size: 40px;
  }

  .user {
    border-radius: 50px;
    height: 51px;
    width: 51px;
  }
`;
