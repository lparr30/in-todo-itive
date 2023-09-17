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

const WeekCard = ({ color, weekday, date, month }) => {
  const [expandedCardHeight, setExpandedCardHeight] = useState('100px');

  const handleCardHeightChange = () => {
    setExpandedCardHeight(expandedCardHeight === '100px' ? '150px' : '100px')
    // setExpandedCardHeight(expandedCardHeight === '100px' && '150px')
  }

  return (
    <TaskCard
      $containerColor={color}
      $containerHeight={expandedCardHeight}
    >
      <WeekDate date={date} weekday={weekday} month={month} />
      <WeekTasks onHeightChange={handleCardHeightChange} />
    </TaskCard>
  );
};

export default WeekCard;
