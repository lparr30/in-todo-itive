import { styled } from "styled-components";
import "../variables.css";
import { useState } from "react";

const Note = styled.div`
  width: 200px;
  // min-height: 150px;
  height: fit-content;
  padding: 8px;
  color: var(--cream);
  border-radius: 7px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`;

const NoteTitle = styled.input`
  margin: 0;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

const Text = styled.p`
  margin: 5px 0;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
  background-color: hotpink;
  min-height: 120px;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 22px;
  background-color: yellow;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const Btn = styled.button`
  background-color: var(--blackTranslucent);
  width: fit-content;
  height: 22px;
  padding: 0 4px;
  color: var(--cream);
  border: none;
  border-radius: 7px;
  margin-bottom: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const SingleNote = ({ title, text }) => {
  return (
    <div>
      <Note>
        <NoteTitle type="text" placeholder="Title" contentEditable='true'>{title}</NoteTitle>
        <Text
        //   onKeyDown={handleKeyDown}
          contentEditable="true"
          id="newNote"
        >{text}</Text>
        <BtnContainer>
          <Btn>Delete</Btn>
          <Btn>Save</Btn>
          {/* <Btn onClick={createNote}>Save</Btn> */}
        </BtnContainer>
      </Note>
    </div>
  );
};

export default SingleNote;
