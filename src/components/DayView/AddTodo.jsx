import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
    width: 340px;
    height: fit-content;
    display: flex;
    background-color: blue;
    // background-color: rgba(0,0,0,0);
    // border-radius: 20px;
    margin: 16px 0;
    // padding: 8px;
    margin-bottom: 30px;
`

const TextInput = styled.textarea`
font-size: 20px;
color: var(--black);
    width: 320px;
    min-height: 80px;
    border-radius: 10px;
    background-color: var(--cream);
`

const ButtonsContainer = styled.div`
background-color: rgba(0, 0, 0, 0);
background: var(--cream);
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 8px;
width: 325px;
height: 32px;
z-index: 3;
`;

const Time = styled.span`
    font-size: 16px;
    background-color: rgba(0,0,0,0);
    margin-left: 4px;
`

const Btn = styled.button`
background-color: var(--blackTranslucent);
// background-color: none;
font-size: 16px;
// width: 34px;
// height: 25px;
text-align: center;
padding: 6px;
color: var(--cream);
border: none;
border-radius: 7px;
margin-right: 4px;


  &:hover {
    cursor: pointer;
  }
`;

function AddTodo() {
    return(
        <Container>
            <TextInput placeholder="Enter a todo item..." contentEditable='true'></TextInput>
            <ButtonsContainer>
                <Time>Time: </Time>
                <Btn>Add</Btn>
            </ButtonsContainer>
            
        </Container>
    )
}

export default AddTodo;
