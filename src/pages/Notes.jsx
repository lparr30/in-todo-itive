import { styled } from "styled-components";
import "../variables.css";
import { useState } from "react";
import SingleNote from "../components/SingleNote";


const NewNoteBtn = styled.button`
    border: 1px solid var(--orange);
    font-size: 24px;
    color: var(--cream);
    padding: 6px;
    border-radius: 6px;
    cursor: pointer;
`

// const Note = styled.div`
//     width: 200px;
//     // min-height: 150px;
//     height: fit-content;
//     padding: 8px;
//     color: var(--cream);
//     border-radius: 7px;
//     background-color: blue;
//     display: flex;
//     flex-direction: column;
//     // justify-content: space-between;
// `

// const NoteTitle = styled.p`
//     margin: 0;
//     font-size: 24px;
//     background-color: rgba(0,0,0,0);
// `

// const Text = styled.p`
//     margin: 5px 0;
//     font-size: 18px;
//     background-color: rgba(0,0,0,0);
//     background-color: hotpink;
//     min-height: 120px;
// `

// const BtnContainer = styled.div`
//     width: 100%;
//     height: 22px;
//     background-color: yellow;
//     display: flex;
//     justify-content: flex-end;
//     gap: 15px;
// `

// const Btn = styled.button`
//   background-color: var(--blackTranslucent);
//   width: fit-content;
//   height: 22px;
//   padding: 0 4px;
//   color: var(--cream);
//   border: none;
//   border-radius: 7px;
//   margin-bottom: 4px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

const Notes = () => {
    const [noteBtn, setNoteBtn] = useState(false)
    const [notes, setNotes] = useState([]);


   


    const writeNote = () => {
        setNoteBtn(true)
    }

   



    return(
        <div>
            <NewNoteBtn onClick={writeNote}>New Note</NewNoteBtn>
            {noteBtn && <SingleNote />}
        </div>
)}

export default Notes;
