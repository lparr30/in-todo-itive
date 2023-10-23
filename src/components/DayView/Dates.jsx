import styled from "styled-components";
import SingleDate from "./SingleDate";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: purple;
  background-color: rgba(0, 0, 0, 0);
width: 100%;
  padding: 6px 0;
  margin-bottom: 10px;
`;

const RowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  background-color: pink;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 6px;
`;

const TodayDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background-color: rgba(0,0,0,0);
    // background-color: lightblue;
`

const Dot = styled.span`
  font-size: 24px;
  margin: 0 3px;
  color: var(--orange);
`;

const SmSpan = styled.span`
font-size: 18px;
color: var(--cream);
background-color: rgba(0, 0, 0, 0);
`

const Span = styled.span`
  font-size: 28px;
  color: var(--cream);
  background-color: rgba(0, 0, 0, 0);
`;

const today = new Date();
const currentDate = today.getDate();
let nextDate;

function Dates() {
  return (
    <Container>
        <TodayDiv>
            <SmSpan>Saturday 21</SmSpan>
            <Span>Today</Span>
        </TodayDiv>
        {/* <Dot>•</Dot> */}
      <RowDiv>
        {Array.from({ length: 4 }).map((_, index) => {
          nextDate = currentDate + index + 1;

          return <SingleDate key={index} date={nextDate} />;
        })}
      </RowDiv>
    </Container>
  );
}

export default Dates;
