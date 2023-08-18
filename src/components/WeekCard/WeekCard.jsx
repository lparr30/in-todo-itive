import { styled } from "styled-components";
import WeekDate from "./WeekDate";
import WeekTasks from "./WeekTasks";

const TaskCard = styled.div`
  width: 88vw;
  height: 80px;
  display: flex;
  align-items: flex-start;
  // background-color: rgb(252, 220, 84);
  background-color: ${props => props.$containerColor};
  border-radius: 20px;
  margin: 0.5em 0;
`;

const WeekCard = ({ color }) => {
  return (
    <TaskCard $containerColor={color} >
      <WeekDate />
      <WeekTasks />
    </TaskCard>
  );
};

export default WeekCard;
