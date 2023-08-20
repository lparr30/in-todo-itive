import { styled } from "styled-components";
import WeekDate from "./WeekDate";
import WeekTasks from "./WeekTasks";

const TaskCard = styled.div`
  width: 88vw;
  height: 100px;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => props.$containerColor};
  border-radius: 20px;
  margin: 0.5em 0;
`;


const WeekCard = ({ color, weekday, date, month }) => {

  return (
    <TaskCard $containerColor={color} >
      <WeekDate date={date} weekday={weekday} month={month}/>
      <WeekTasks />
    </TaskCard>
  );
};

export default WeekCard;
