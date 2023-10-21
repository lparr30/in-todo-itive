import { styled } from "styled-components";
import Dates from "../components/DayView/Dates";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskDiv = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  //   flex-grow: 1;
  //   flex-basis: 500px;
`;

const BtnDiv = styled.div`
  background-color: lavender;
  background-color: rgba(0, 0, 0, 0);
  margin: 20px 0;
  position: absolute;
  bottom: 30px;
`;

const NewTodoBtn = styled.button`
  background-color: var(--blackTranslucent);
  font-size: 28px;
  text-align: center;
  padding: 12px;
  color: var(--cream);
  border: 1px solid var(--orange);
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`;

const DayView = () => {
  return (
    <Layout>
      <Dates />
      <TaskDiv>tasks</TaskDiv>
      <BtnDiv>
        <NewTodoBtn>New Todo</NewTodoBtn>
      </BtnDiv>
    </Layout>
  );
};

export default DayView;
