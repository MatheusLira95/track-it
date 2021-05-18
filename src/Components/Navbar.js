import styled from "styled-components";
import UserFoto from "../images/userfoto.png";
export default function Navbar(){
    return(
        <>
            <Bar>
                <p>TrackIt</p>
                <img className="user" src={UserFoto} alt="UserFoto" />
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
    background-color: #126BA5;

    p{
        color: #fff;
        font-family: 'Playball';
        font-size: 40px;
    }
    
    .user{
        border-radius: 50px;
        height: 51px;
        width: 51px;
    }

`;