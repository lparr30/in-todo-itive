import styled from "styled-components";

const Date = styled.span`
  font-size: 28px;
  color: var(--cream);
  background-color: rgba(0, 0, 0, 0);
`;

function SingleDate({ date }) {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0)" }}>
      <Date>{date}</Date>
    </div>
  );
}

export default SingleDate;
