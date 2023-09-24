import { styled } from "styled-components";
import "../variables.css";

const CheckboxContainer = styled.ul`
  margin: 0;
  padding: 0;
  background-color: purple;
  list-style-type: none;
`;

const CheckboxItem = styled.label`
  background-color: pink;
  //   display: inline;
  cursor: pointer;
  font-size: 18px;
`;

const TodoCheckboxes = ({ inputText, todoList, ListId }) => {
  return (
    <CheckboxContainer>
      {todoList.map((todo) => {
        return (
          <li style={{backgroundColor: 'rgba(0,0,0,0)'}}>
            <input type="checkbox" />
            <CheckboxItem id={todo.ListId}>{inputText}</CheckboxItem>
          </li>
        );
      })}
    </CheckboxContainer>
  );
};

export default TodoCheckboxes;
