import { styled } from "styled-components";

const TaskContainer = styled.ul`
  background: none;
  position: relative;
  top: -5px;
  width: 55%;
  margin-left: 8%;
  padding: 0;
`;

const Tasks = styled.li`
  background: none;
  font-size: 1.25em;
`;

const WeekTasks = () => {
  return (
    <TaskContainer>
      <Tasks>test</Tasks>
    </TaskContainer>
  );
};

export default WeekTasks;
