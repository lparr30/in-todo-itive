import { styled } from "styled-components";

const DateContainer = styled.div`
  background: pink;
  width: 32%;
  height: 80%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const DateStyles = {
//   position: "absolute",
//   color: 'blue',
//   background: "none",
//   margin: "0",
// };

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
