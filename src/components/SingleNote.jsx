import { styled } from "styled-components";
import "../variables.css";

const Note = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--cream);
  width: 200px;
  height: fit-content;
  padding: 8px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;

const NoteTitle = styled.input`
  margin: 0;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0);
  //   background-color: green;
  border: none;
  font-weight: bold;
`;

const Text = styled.textarea`
  margin: 5px 0;
  font-size: 18px;
  color: var(--black);
  background-color: rgba(0, 0, 0, 0);
  //   background-color: hotpink;
  min-height: 120px;
  border-radius: 4px;
  border: 1px solid var(--orange);
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 22px;
  //   background-color: yellow;
  background-color: rgba(0, 0, 0, 0);
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

const SingleNote = ({ title, text, saveNote, onTitleChange, onTextChange }) => {
  
    return (
    <div>
      <Note>
        <NoteTitle onChange={onTitleChange} value={title} type="text" placeholder="Note Title" contentEditable="true">
        </NoteTitle>
        <Text onChange={onTextChange} value={text} />
        <BtnContainer>
          <Btn onClick={saveNote}>Save</Btn>
        </BtnContainer>
      </Note>
    </div>
  );
};

export default SingleNote;
