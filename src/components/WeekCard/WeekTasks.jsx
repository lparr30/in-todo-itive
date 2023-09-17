import { styled } from "styled-components";
import { useState } from "react";

const TaskContainer = styled.div`
  background: lightBlue;
  // background: none;
  position: relative;
  width: 64%;
  height: 90px;
  height: ${(props) => props.$containerHeight};
  // margin: auto 0;
  margin-top: 5px;
  padding: 0 0 0 0;
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

const NewItem = styled.button`
  visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  width: 40%;
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

const WeekTasks = ({ onHeightChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    if (!isClicked) {
      setIsClicked(true);
      onHeightChange();
    } else if (isClicked && event.target.classList.contains('done')) {
      setIsClicked(false)
    }
  };
  
  const closeTask = () => {
    console.log('done')
    setIsClicked(false);
    onHeightChange();
  }
  
  const expandedCard = {
    height: isClicked ? "140px" : "90px",
  };

  return (
    <TaskContainer onClick={handleClick} $containerHeight={expandedCard.height}>
      {isClicked && (
        <ButtonsContainer>
          <NewItem onClick={() => console.log("new item")}>New Item</NewItem>
          <Done className="done" onClick={closeTask}>Done</Done>
        </ButtonsContainer>
      )}
    </TaskContainer>

  );
};

export default WeekTasks;
