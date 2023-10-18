import { styled } from "styled-components";
import { useState } from "react";
import "../../variables.css";
import TodoCheckboxes from "../TodoCheckboxes";

const TaskContainer = styled.div`
  background: lightBlue;
  position: relative;
  width: 217.6px;
  // height: 112px;
  min-height: 120px;
  // max-height: fit-content;
  max-height: ${(props) => props.$maxTaskHeight};
  // display: flex;
  // flex-direction: column;
  // flex: 1 0 auto;
  margin-top: 5px;
  padding: 0 0 0 0;
  padding: 2px;
`;

const TodoList = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  // justify-content: flex-start;
`;

const NewTodo = styled.div`
  // background-color: var(--yellow);
  background-color: rgba(0, 0, 0, 0);
  // height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextField = styled.input`
  width: 174px;
  height: 23px;
  font-size: 20px;
  background-color: green;
  // background-color: rgba(0,0,0,0);
  color: rgb(22, 22, 22);
  border: 1px solid var(--black) !important;
  border: none;
  border-radius: 7px;
`;

const Add = styled.button`
  // visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  // background-color: none;
  width: 34px;
  height: 25px;
  text-align: center;
  padding: 0;
  color: var(--cream);
  border: none;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`;


const WeekTasks = ({ editClick, expandedCardHeight, setExpandedCardHeight }) => {
  const [val, setVal] = useState('');
  const [tasks, setTasks] = useState([]);

  const expanded = {
    height: "fit-content",
  };

  const changeVal = (event) => {
    setVal(event.target.value);
  }

  const addTask = () => {
    if (val.trim() !== '') {
      setTasks([...tasks, val]);
    }
    setVal('');
    console.log(expanded.height)
    
    if (tasks.length > 4) {
      setExpandedCardHeight('fit-content')
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <TaskContainer
      $maxTaskHeight={expanded.height}
    >
      <TodoList>
        <NewTodo>
          <TextField
            type="text"
            placeholder="New Task"
            name="input"
            value={val}
            onChange={changeVal}
            onKeyDown={handleKeyDown}
          ></TextField>
          <Add type="submit" onClick={addTask}>
            Add
          </Add>
        </NewTodo>

        {tasks.map((task, index) => {
          return(
            <TodoCheckboxes deleteTask={deleteTask} key={index} editClick={editClick} task={task} index={index} />
          )
        })}


      </TodoList>
    </TaskContainer>
  );
};

export default WeekTasks;
