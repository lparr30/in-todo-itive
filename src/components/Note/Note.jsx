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
    background-color: rgba(0,0,0,0);
`

const Btn = styled.button`
  background-color: var(--blackTranslucent);
  width: fit-content;
  height: 22px;
  padding: 0 4px;
  color: var(--cream);
  border: none;
  border-radius: 7px;
//   margin-bottom: 4px;

  &:hover {
    cursor: pointer;
  }
`;

function Note() {
    
    const date = new Date()
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    
    return(

    <NoteDiv>
        <Text value='the first note'/>
        <FooterContainer>
            <NoteDate>{month}/{day}/{year}</NoteDate>
            <Btn>Delete</Btn>
        </FooterContainer>
    </NoteDiv>
)}

export default Note;
