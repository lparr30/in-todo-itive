import styled from "styled-components";

const Container = styled.div`
    width: 340px;
    height: 120px;
    display: flex;
    background-color: pink;
    padding: 6px;
    border-radius: 20px;
    margin: 16px 0;
`

function Todo() {
    return(
        <Container>
            <p style={{backgroundColor: 'rgba(0,0,0,0)'}}>todo item</p>
        </Container>
    )
};

export default Todo;
