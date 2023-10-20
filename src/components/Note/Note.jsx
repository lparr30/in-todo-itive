import styled from "styled-components";

const NoteDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--cream);
  width: 200px;
  height: fit-content;
  padding: 8px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const TopDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

const DropdownBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  height: 22px;
  color: var(--black);
  border: none;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  margin: 5px 0;
  font-size: 20px;
  color: var(--black);
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  //   background-color: purple;
`;

const Text = styled.span`
  margin: 5px 0;
  font-size: 18px;
  color: var(--black);
  background-color: rgba(0, 0, 0, 0);
  //   background-color: hotpink;
  min-height: 120px;
  border-radius: 4px;
  border: 1px solid var(--orange);
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 22px;
  //   background-color: yellow;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const NoteDate = styled.span`
  background-color: rgba(0, 0, 0, 0);
`;

const Btn = styled.button`
  background-color: var(--blackTranslucent);
  width: fit-content;
  height: 22px;
  padding: 0 4px;
  color: var(--cream);
  border: none;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`;

function Note({ id, title, text, date, handleDeleteNote }) {

  return (
    <NoteDiv id={id}>
      <TopDiv>
        <Title>{title}</Title>
        <DropdownBtn>⌵</DropdownBtn>
      </TopDiv>
      <Text>{text}</Text>
      <FooterContainer>
        <NoteDate>{date}</NoteDate>
        <Btn onClick={() => handleDeleteNote(id)}>Delete</Btn>
      </FooterContainer>
    </NoteDiv>
  );
}

export default Note;
