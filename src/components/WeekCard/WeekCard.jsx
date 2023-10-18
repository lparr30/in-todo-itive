import { styled } from "styled-components";
import WeekDate from "./WeekDate";
import WeekTasks from "./WeekTasks";
import "../../variables.css";
import { useState } from "react";

const TaskCard = styled.div`
  width: 340px;
  // height: 150px;
  height: ${(props) => props.$colorCardHeight}px;
  display: flex;
  // align-items: flex-start;
  background-color: ${(props) => props.$containerColor};
  border-radius: 20px;
  margin: 16px 0;
`;

const TasksEditBox = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonsContainer = styled.div`
  // background-color: red;
  background-color: rgba(0, 0, 0, 0);
  // background: var(--yellow);
  display: flex;
  justify-content: flex-end;
  // position: absolute;
  bottom: 0;
  width: 217.6px; //64% of WeekCard width
  height: 24px;
`;

const Btn = styled.button`
  // visibility: ${(props) => props.$newItemVisibility};
  background-color: var(--blackTranslucent);
  width: fit-content;
  height: 22px;
  padding: 0 4px;
  color: var(--cream);
  border: none;
  border-radius: 7px;
  margin-bottom: 4px;
  // z-index: 4;

  &:hover {
    cursor: pointer;
  }
`;

const WeekCard = ({ color, weekday, date, month }) => {
  const [expandedCardHeight, setExpandedCardHeight] = useState(170);
  const [editClick, setEditClick] = useState(false);

  // const handleCardHeightChange = () => {
  //   setExpandedCardHeight();
  // };

  const handleEdit = (event) => {
    if (!editClick) {
      setEditClick(true);
    } else if (editClick && event.target.classList.contains("done")) {
      setEditClick(false);
    }
  };

  const handleDone = () => {
    setEditClick(false);
    // onHeightChange();
  };

  return (
    <TaskCard $containerColor={color} $colorCardHeight={expandedCardHeight}>
      <WeekDate date={date} weekday={weekday} month={month} />
      <TasksEditBox>
        <WeekTasks
          // onHeightChange={handleCardHeightChange}
          editClick={editClick}
          setEditClick={setEditClick}
          expandedCardHeight={expandedCardHeight}
          setExpandedCardHeight={setExpandedCardHeight}
        />
        {!editClick && (
          <ButtonsContainer>
            <Btn onClick={handleEdit}>Edit</Btn>
          </ButtonsContainer>
        )}

        {editClick && (
          <ButtonsContainer>
            <Btn className="done" onClick={handleDone}>
              Done
            </Btn>
          </ButtonsContainer>
        )}
      </TasksEditBox>
    </TaskCard>
  );
};

export default WeekCard;
