import "../variables.css";
import SingleNote from "../components/SingleNote";
import { useState } from "react";


const Notes = () => {
    const [allNotes, setAllNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', text: ''});



    const saveNote = () => {
        console.log(newNote.title, newNote.text);

        setAllNotes([ ...allNotes, newNote ]);
        setNewNote({ title: '', text: ''})
    }

    return(
        <div>
            <SingleNote
                saveNote={saveNote}
            />
            {allNotes.map((index) => {
                return(
                    <SingleNote 
                        key={index}
                        title={newNote.title}
                        text={newNote.text}
                        onTitleChange={(event) => setNewNote({ ...newNote, title: event.target.value })}
                        onTextChange={(event) => setNewNote({ ...newNote, text: event.target.value })}
                    />
                )
            })}
        </div>
    
)}

export default Notes;
