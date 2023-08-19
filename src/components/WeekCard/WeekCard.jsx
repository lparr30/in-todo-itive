import { styled } from "styled-components";
import WeekDate from "./WeekDate";
import WeekTasks from "./WeekTasks";
// import colors from "../../assets/colors";

const TaskCard = styled.div`
  width: 88vw;
  height: 80px;
  display: flex;
  align-items: flex-start;
  // background-color: rgb(252, 220, 84);
  background-color: ${(props) => props.$containerColor};
  border-radius: 20px;
  margin: 0.5em 0;
`;


const WeekCard = ({ color, date, weekday }) => {

  return (
    <TaskCard $containerColor={color} >
      <WeekDate date={date} weekday={weekday}/>
      <WeekTasks />
    </TaskCard>
  );
};

export default WeekCard;
