import { styled } from "styled-components";
import { useState } from "react";
import "../../variables.css";

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

const CheckboxContainerBig = styled.div`
  width: 100%;
  height: 160px;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const CheckboxContainerSmall = styled.div`
  display: inline-block;
  vertical-align: top;
  background: $color--white;
  text-align: left;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  // padding: 30px;
  // width: 200px;
  // height: 210px;
  // margin: 10px;
`

const Checkboxes = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
`

const ButtonsContainer = styled.div`
  // background-color: red;
  background-color: rgba(0,0,0,0);
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

  const renderTodo = (event) => {
    setAddIsClicked(true);
  };

  const expandedCard = {
    height: isClicked ? "190px" : "140px",
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
          ></TextField>
          <Add type="submit" onClick={renderTodo}>
            Add
          </Add>
        </NewTodo>
        {addIsClicked && (
          <CheckboxContainerBig>
            <CheckboxContainerSmall>
              <Checkboxes>this is a todo item
                <input type="checkbox"/>
              </Checkboxes>
            </CheckboxContainerSmall>
          </CheckboxContainerBig>

          // <ul type='checklist' style={{backgroundColor: 'rgba(0,0,0,0)', listStyle: 'circle'}}>
          //   <li style={{backgroundColor: 'rgba(0,0,0,0)'}}>hello</li>
          // </ul>
        )}
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
