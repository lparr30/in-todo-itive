import { styled } from "styled-components";
import { useState } from "react";
import "../../variables.css";

const TaskContainer = styled.div`
  background: lightBlue;
  // background: none;
  position: relative;
  // width: 64%;
  width: 217.6px;
  height: 140px;
  height: ${(props) => props.$taskContainerHeight};
  // margin: auto 0;
  margin-top: 5px;
  padding: 0 0 0 0;
`;

const TodoItem = styled.div`
  background-color: var(--yellow);
  // height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextField = styled.input`
  width: 174px;
  height: 24px;
  font-size: 20px;
  background-color: green;
  color: rgb(22, 22, 22);
  border: none;
  border-radius: 7px;
`;

const Add = styled.button`
  visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  // background-color: none;
  width: 34px;
  height: 24px;
  text-align: center;
  padding: 0;
  color: var(--cream);
  border: none;
  border-radius: 7px;
`;

const Done = styled.button`
  visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  width: 25%;
  color: var(--cream);
  border: none;
  border-radius: 7px;
`;

const ButtonsContainer = styled.div`
  background-color: red;
  // background: none;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  width: 217.6px; //64% of WeekCard width
  height: 16%;
`;

const WeekTasks = ({ onHeightChange }) => {
  const [isClicked, setIsClicked] = useState(false);
  // const [newItemButton, setNewItemButton] = useState(false)

  const handleClick = (event) => {
    if (!isClicked) {
      setIsClicked(true);
      onHeightChange();
    } else if (isClicked && event.target.classList.contains("done")) {
      setIsClicked(false);
    }
    // setNewItemButton(true);
  };

  const closeTask = () => {
    console.log("done");
    setIsClicked(false);
    onHeightChange();
  };

  const expandedCard = {
    height: isClicked ? "190px" : "140px",
  };

  return (
    <TaskContainer
      onClick={handleClick}
      $taskContainerHeight={expandedCard.height}
    >
      {/* {newItemButton && (
        <TodoItem>
          <TextField type="text" id="new-todo" name="text" autoComplete="off"></TextField>
          <NewItem type="submit">Add</NewItem>
        </TodoItem>
      )} */}
      <TodoItem>
        <TextField
          type="text"
          id="new-todo"
          name="text"
          autoComplete="off"
        ></TextField>
        <Add type="submit">Add</Add>
      </TodoItem>
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
