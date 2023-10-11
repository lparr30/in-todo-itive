import { styled } from "styled-components";
import "../variables.css";

const TaskContainer = styled.div`
  margin: 0;
  padding: 0;
  // background-color: purple;
  background-color: rgba(0,0,0,0);
  list-style-type: none;
`;

const Checkbox = styled.input`
  cursor: pointer;

  &:checked {
    background-color: red;
  }
`;

const TodoCheckboxes = ({ task, index }) => {
  return (
    <TaskContainer key={index}>
      <Checkbox value={task} type="checkbox" />
      <span style={{backgroundColor: 'rgba(0,0,0,0)', paddingLeft: '3px'}}>{task}</span>
    </TaskContainer>
  );
};

export default TodoCheckboxes;
