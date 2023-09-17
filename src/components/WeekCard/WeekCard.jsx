import { styled } from "styled-components";
import WeekDate from "./WeekDate";
import WeekTasks from "./WeekTasks";
import '../../variables.css';
import { useState } from "react";

const TaskCard = styled.div`
  width: 340px;
  // height: 100px;
  height: ${(props) => props.$containerHeight};
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => props.$containerColor};
  border-radius: 20px;
  margin: 8px 0;
`;

// const NewItem = styled.button`
//   visibility: ${(props) => props.$newItemVisibility};
//   background-color: red;
// `

const WeekCard = ({ color, weekday, date, month }) => {
  const [isClicked, setIsClicked] = useState(false);

  const expandedCard = {
    height: isClicked ? "150px" : "100px",
    // visibility: isClicked ? 'visibile' : 'hidden'
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <TaskCard
      $containerColor={color}
      $containerHeight={expandedCard.height}
      onClick={handleClick}
    >
      <WeekDate date={date} weekday={weekday} month={month} />
      <WeekTasks isClicked={isClicked}/>
      {/* <NewItem $newItemVisibility={expandedCard.visibility}></NewItem> */}
    </TaskCard>
  );
};

export default WeekCard;
