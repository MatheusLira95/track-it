import { useState } from "react";
import styled from "styled-components";
import CreatedHabContext from "../contexts/CreatedHabContext";
import { useContext } from "react";

export default function WeekDaysListed({ id, hab }){
    const weekDays = ["D","S","T","Q","Q","S","S"];
    const {habsList, createdHab} = useContext(CreatedHabContext)
    
    return(
        <>         
                
                    
            <WeekDaysList>
                {weekDays.map((d, i) => {
                    return (
                            <WeekDay isSelected={hab.days.includes(i)}id={i}>{d}</WeekDay>
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