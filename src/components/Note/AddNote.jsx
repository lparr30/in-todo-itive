import styled from "styled-components";
import { useState } from "react";

const NoteDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--green);
  width: 90%;
  height: fit-content;
  padding: 8px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

const Title = styled.textarea`
  font-size: 20px;
  color: var(--black);
  font-weight: bold;
  height: 24px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  //   background-color: purple;
`;

const Text = styled.textarea`
  margin: 5px 0;
  font-size: 18px;
  color: var(--black);
  background-color: rgba(0, 0, 0, 0);
  //   background-color: hotpink;
  min-height: 120px;
  border-radius: 4px;
  border: 1px solid var(--cream);
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

const CharCount = styled.span`
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

function AddNote({ handleAddNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const remaining = 200 - noteText.length;

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteTitle.trim() !== "" && noteText.trim() !== "" && noteText.length < 201) {
      handleAddNote(noteTitle, noteText);
      setNoteTitle("");
      setNoteText("");
    } else if (noteText.length > 200) {
        alert('You have a way with words! Mind the 200 character limit...')
    } else {
      alert("It looks like your note is empty...");
    }
  };

  return (
    <NoteDiv>
      <Title
        value={noteTitle}
        onChange={handleTitleChange}
        placeholder="Note Title"
      ></Title>
      <Text
        value={noteText}
        onChange={handleTextChange}
        placeholder="Type to add a note..."
      ></Text>
      <FooterContainer>
        <CharCount>{remaining} characters left</CharCount>
        <Btn onClick={handleSaveClick}>Save</Btn>
      </FooterContainer>
    </NoteDiv>
  );
}

export default AddNote;
