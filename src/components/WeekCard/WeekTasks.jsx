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

const Done = styled.button`
  visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  width: 40px;
  padding: 0;
  color: var(--cream);
  border: none;
  border-radius: 7px;
  // z-index: 4;
`;

const WeekTasks = ({ onHeightChange }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [addIsClicked, setAddIsClicked] = useState(false);
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleClick = (event) => {
    if (!isClicked) {
      setIsClicked(true);
      onHeightChange();
    } else if (isClicked && event.target.classList.contains("done")) {
      setIsClicked(false);
    }
  };

  const closeTask = () => {
    console.log("done");
    setIsClicked(false);
    onHeightChange();
    setAddIsClicked(false);
  };

  const renderTodo = () => {
    setAddIsClicked(true);
    const ListId = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: ListId,
        task: inputText,
      },
    ]);

  };

  // const handleInputText = (e) => {
  //   setInputText(e.target.value);
  // }

  const expandedCard = {
    height: isClicked ? "185px" : "135px",
  };

  return (
    <TaskContainer
      onClick={handleClick}
      $taskContainerHeight={expandedCard.height}
    >
      <TodoList>
        <NewTodo>
          <TextField
            type="text"
            placeholder="New Task"
            id="new-todo"
            name="text"
            autoComplete="off"
            // onChange={renderTodo}
            value={inputText}
            onInput={(event) => setInputText(event.target.value)}
          ></TextField>
          <Add type="submit" onClick={renderTodo}>
            Add
          </Add>
        </NewTodo>
        {addIsClicked && <TodoCheckboxes inputText={inputText} todoList={todoList} />}
      </TodoList>
      {isClicked && (
        <ButtonsContainer>
          <Done className="done" onClick={closeTask}>
            Done
          </Done>
        </ButtonsContainer>
      )}
    </TaskContainer>
  );
};

export default WeekTasks;
