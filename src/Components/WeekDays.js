import { useEffect } from "react";
import styled from "styled-components";
import CreatedHabContext from "../contexts/CreatedHabContext";
import { useContext } from "react";


export default function WeekDays({ setHabitDays, habitDays }){
    const weekDays = ["D","S","T","Q","Q","S","S"];
    const {createdHab, setCreatedHab} = useContext(CreatedHabContext)


    useEffect(() => {
        setHabitDays([...createdHab])
    }, []) 
    
    function addDay(iday){
        if(!createdHab.find(id => id === iday)){
            setCreatedHab([...createdHab, iday])
        }else if(createdHab.find(id => id === iday)){
            createdHab.splice(createdHab.indexOf(iday), 1);
            setCreatedHab([...createdHab]);
        }
    }
    
    return(
        <>
            <WeekDaysList>
                {weekDays.map((d, i) => {
                    return (
                            <WeekDay isSelected={createdHab.includes((i+1))} onClick={() => addDay(i+1)} id={i+1}>{d}</WeekDay>
                        );
                    })
                }
            </WeekDaysList>
        </>
    );
}
const WeekDaysList = styled.ul`
    display:flex;

`;
const WeekDay = styled.li`
    height:30px;
    width:30px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size:19.98px;
    margin-right: 4px;
    color:${props => props.isSelected ? "#fff" : "#d4d4d4"};
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.isSelected ? "#cfcfcf" : "#fff"}
`;