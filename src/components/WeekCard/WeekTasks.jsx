import { styled } from "styled-components";

const TaskContainer = styled.div`
  background: lightBlue;
  // background: none;
  position: relative;
  width: 65%;
  height: 97%;
  margin: auto 0;
  padding: 0 0 0 0;
`;

const ButtonsContainer = styled.div`
  background-color: red;
  // background: none;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  width: 57.2vw;
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

const WeekTasks = ({ isClicked }) => {
  return (
    <TaskContainer>
      {isClicked && (
        <ButtonsContainer>
          <NewItem>New Item</NewItem>
          <Done>Done</Done>
        </ButtonsContainer>
      )}
    </TaskContainer>
  );
};

export default WeekTasks;
