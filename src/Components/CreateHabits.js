import styled from "styled-components";
import WeekDays from "./WeekDays";

export default function CreateHabits({weekDays}){
    
    return(
        <>
            <CreateHabit>
                <input type="text" placeholder="nome do hábito"></input>
                <WeekDays />
                <BottomButtons>
                    <button className="cancel">Cancelar</button>
                    <button className="save">Salvar</button>
                </BottomButtons>
            </CreateHabit>
        </>
    );
}

const CreateHabit = styled.div`
    width:100%;
    height: 180px;
    background-color:#fff;
    border-radius:5px;
    padding: 18px;
    margin-bottom:26px;
    input{
        width:100%;
        height:45px;
        border-radius: 5px;
        border: 1px solid #d4d4d4;
        font-size:19.98px;
        padding: 0px 10px;
    }
    ul{
        display:flex;
        margin-top: 5px;
    }
`;

const BottomButtons = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:35px;
    button{
        margin-left: 20px;
        width: 84px;
        height:35px;
        border-radius:4px;
        border:none;
        outline:none;
    }
    .cancel{
        background-color:#fff;
        color: #52b6ff;
        font-size:15px;
    }
    .save{
        background-color:#52b6ff;
        color: #fff;
        font-size:15px;
    }
`;