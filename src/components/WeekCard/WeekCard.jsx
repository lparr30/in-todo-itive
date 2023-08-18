import { styled } from "styled-components";
import WeekDate from "./WeekDate";

const TaskCard = styled.div`
  width: 87vw;
  height: 10vh;
  background-color: rgb(252, 220, 84);
  border-radius: 20px;
  margin: 0.5em 0;
  padding: 0.5em;
`;

const WeekCard = () => {
  return (
    <TaskCard>
      <WeekDate />
    </TaskCard>
  );
};

export default WeekCard;
