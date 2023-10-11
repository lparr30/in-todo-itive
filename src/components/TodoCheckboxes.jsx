import { styled } from "styled-components";
import "../variables.css";

const TaskContainer = styled.div`
  margin: 0;
  padding: 0;
  // background-color: purple;
  background-color: rgba(0,0,0,0);
  list-style-type: none;
`;

// const CheckboxItem = styled.label`
//   background-color: pink;
//   //   display: inline;
//   cursor: pointer;
//   font-size: 18px;
// `;

const TodoCheckboxes = ({ task, index }) => {
  return (
    <TaskContainer key={index}>
      <input value={task} type="checkbox" />
      <span style={{backgroundColor: 'rgba(0,0,0,0)', paddingLeft: '3px'}}>{task}</span>
    </TaskContainer>
  );
};

export default TodoCheckboxes;
