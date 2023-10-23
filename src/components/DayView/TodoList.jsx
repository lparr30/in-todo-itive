import styled from "styled-components";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function TodoList() {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <AddTodo />
            <Todo />
        </div>
    )
}

export default TodoList;
