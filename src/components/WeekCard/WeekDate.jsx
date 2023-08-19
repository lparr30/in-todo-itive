import { styled } from "styled-components";

const DateContainer = styled.div`
  background: none;
  position: relative;
  top: 10px;
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DateNum = styled.p`
  background: none;
  margin: 0;
  font-size: 2em;
  font-weight: bold;
`;

const DateDay = styled.p`
  background: none;
  margin: 0;
  font-size: 1.25em;
  font-style: italic;
`;

const WeekDate = () => {
  return (
    <DateContainer>
      <DateNum>7</DateNum>
      <DateDay>Monday</DateDay>
    </DateContainer>
  );
};

export default WeekDate;
