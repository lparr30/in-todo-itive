import { styled } from "styled-components";

const DateContainer = styled.div`
  background: none;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DateDay = styled.p`
  background: none;
  margin: 0;
  font-size: 1.25em;
  font-style: italic;
`;

const DateNum = styled.p`
  background: none;
  margin: 0;
  font-size: 2em;
  font-weight: bold;
`;

const DateMonth = styled.p`
  background: none;
  margin: 0;
  font-size: 1em;
  // font-style: italic;
`;

const WeekDate = ({ weekday, date, month }) => {
  return (
    <DateContainer>
      <DateDay>{weekday}</DateDay>
      <DateNum>{date}</DateNum>
      <DateMonth>{month}</DateMonth>
    </DateContainer>
  );
};

export default WeekDate;
