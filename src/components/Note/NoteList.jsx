import Note from "./Note";
import AddNote from "./AddNote";
import { useState } from "react";

function NoteList({ notes, handleAddNote, handleDeleteNote }) {
//   const [dropdownClick, setDropdownClick] = useState(false);

  return (
    <div>
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={note.id}
            title={note.title}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
