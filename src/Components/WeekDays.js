import styled from "styled-components";

export default function WeekDays(){
    const weekDays = ["D","S","T","Q","Q","S","S"]
    return(
        <>
            <WeekDaysList>
                {weekDays.map(d => {
                    return (
                            <WeekDay>{d}</WeekDay>
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
    color:#d4d4d4;
    display:flex;
    align-items:center;
    justify-content:center;
`;