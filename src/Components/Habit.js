import styled from "styled-components";
import WeekDays from "./WeekDays";
import { TrashOutline } from 'react-ionicons'

export default function Habit(){
    return(
        <>
            <Container>
                <ul>
                    <HabitCard>
                        <p>Nome do hábito</p>
                        <WeekDays />
                        <TrashOutline cssClasses="delete" />
                    </HabitCard>
                </ul>
            </Container>
        </>
    );
}

const Container = styled.div`
    height: 100%;
    width:100%;
    display:flex;
    justify-content:flex-start;
    
    ul{
        width:100%;
    }
`;

const HabitCard = styled.li`
    height: 91px;
    width:100%;
    background-color: #fff;
    display: flex;
    flex-direction:column;
    justify-content:center;
    padding:12px;
    position:relative;
    border-radius: 5px;

    p{
        font-size: 19.98px;
        color: #666666;
        margin-bottom: 5px;
        
    }
    .delete{
        position:absolute;
        top: 10px;
        right: 10px;
        height: 17px;
    }

`;