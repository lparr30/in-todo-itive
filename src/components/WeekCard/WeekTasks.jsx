import { styled } from "styled-components";
import { useState } from "react";
import "../../variables.css";
import TodoCheckboxes from "../TodoCheckboxes";
import userEvent from "@testing-library/user-event";

const TaskContainer = styled.div`
  background: lightBlue;
  // background: none;
  // border: 1px solid var(--black) !important;
  // border-radius: 10px;
  position: relative;
  // width: 64%;
  width: 217.6px;
  height: 140px;
  height: ${(props) => props.$taskContainerHeight};
  // margin: auto 0;
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
  visibility: ${(props) => props.$newItemVisibility};
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

const ButtonsContainer = styled.div`
  // background-color: red;
  background-color: rgba(0, 0, 0, 0);
  // background: var(--yellow);
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 217.6px; //64% of WeekCard width
  height: 24px;
`;

const Btn = styled.button`
  visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  width: fit-content;
  padding: 0 4px;
  color: var(--cream);
  border: none;
  border-radius: 7px;
  // z-index: 4;

  &:hover {
    cursor: pointer;
  }
`;

const WeekTasks = ({ onHeightChange }) => {
  const [editClick, setEditClick] = useState(false);
  const [val, setVal] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleClick = (event) => {
    if (!editClick) {
      setEditClick(true);
      onHeightChange();
    } else if (editClick && event.target.classList.contains("done")) {
      setEditClick(false);
    }
  };

  const closeTask = () => {
    console.log("done");
    setEditClick(false);
    onHeightChange();
  };

  const changeVal = (event) => {
    setVal(event.target.value);
  }

  const addTask = () => {
    if (val.trim() !== '') {
      setTasks([...tasks, val]);
    }
    setVal('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  const expandedCard = {
    height: editClick ? "185px" : "135px",
  };

  return (
    <TaskContainer
      // onClick={handleClick}
      $taskContainerHeight={expandedCard.height}
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
            <TodoCheckboxes task={task} index={index} />
          )
        })}


      </TodoList>

      {!editClick && (<ButtonsContainer>
          <Btn className="done" onClick={handleClick}>
            Edit
          </Btn>
      </ButtonsContainer>)}

      {editClick && (
        <ButtonsContainer>
          <Btn className="done" onClick={closeTask}>
            Done
          </Btn>
        </ButtonsContainer>
      )}
    </TaskContainer>
  );
};

export default WeekTasks;
