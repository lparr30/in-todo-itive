import { styled } from "styled-components";

const TaskContainer = styled.div`
  background: lightBlue;
  position: relative;
  width: 65%;
  height: 93%;
  // margin-top: 1%;
  margin: auto 0;
  padding: 0 0 0 0;
`;

const Tasks = styled.p`
  background: none;
  font-size: 1.25em;
`;

const WeekTasks = () => {
  return (
    <TaskContainer>
      <input
        type="text"
        placeholder="Enter a task..."
        style={{
          background: "purple",
          border: "none",
          width: "98%",
          height: "20%",
          fontSize: "1em",
        }}
      ></input>
      {/* <Tasks>test</Tasks> */}
    </TaskContainer>
  );
};

export default WeekTasks;
