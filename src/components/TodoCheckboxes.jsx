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

const Btn = styled.button`
  background-color: var(--blackTranslucent);
  width: 15px;
  height: 15px;
  // padding: 0 4px;
  padding: 0;
  font-size: 16px;
  color: var(--cream);
  border: none;
  border-radius: 4px;
  z-index: 4;
  margin: 2.5px;

  &:hover {
    cursor: pointer;
  }
`;

const TodoCheckboxes = ({ task, index, editClick, deleteTask }) => {

  const handleDeleteTask = () => {
    console.log(`Clicked task at ${index}: ${task}`)
  }

  return (
    <TaskContainer onClick={handleDeleteTask}>
      {!editClick && <Checkbox value={task} type="checkbox" />}
      {editClick && <Btn onClick={() => deleteTask(index)}>x</Btn>}
      <span style={{backgroundColor: 'rgba(0,0,0,0)', paddingLeft: '3px'}}>{task}</span>
    </TaskContainer>
  );
};

export default TodoCheckboxes;
