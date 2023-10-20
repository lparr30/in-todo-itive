import { useState } from "react";
import styled from "styled-components";

const NoteDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--cream);
  width: 315px;
  height: ${(props) => props.$height};
//   height: fit-content;
  padding: 8px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;

const TopDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

const DropdownBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--blackTranslucent);
  font-size: 22px;
  //   font-weight: bolder;
  height: fit-content;
  //   padding: 2px 6px;
  //   padding-bottom: 4px;
  color: var(--cream);
  border: none;
  border-radius: 7px;

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

const DropdownDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  // background-color: red;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => props.$visibility};
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
  const [dropdownClick, setDropdownClick] = useState(false);

  const showDropdown = {
    visibility: dropdownClick ? "visibile" : "hidden",
    height: dropdownClick ? 'fit-content' : '30px'
  };

  const handleDropdown = () => {
    setDropdownClick(!dropdownClick);
  };

  return (
    <NoteDiv id={id} $height={showDropdown.height}>
      <TopDiv>
        <Title>{title}</Title>
        {!dropdownClick && (
          <DropdownBtn onClick={handleDropdown}>&or;</DropdownBtn>
        )}
        {dropdownClick && (
          <DropdownBtn onClick={handleDropdown}>&and;</DropdownBtn>
        )}
      </TopDiv>
      <DropdownDiv $visibility={showDropdown.visibility}>
        <Text>{text}</Text>
        <FooterContainer>
          <NoteDate>{date}</NoteDate>
          <Btn onClick={() => handleDeleteNote(id)}>Delete</Btn>
        </FooterContainer>
      </DropdownDiv>
    </NoteDiv>
  );
}

export default Note;
