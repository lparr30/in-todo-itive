import "../variables.css";

import { useState } from "react";
import NoteList from "../components/Note/NoteList";

const Notes = () => {
  const [notes, setNotes] = useState([
    // {
    //   title: "",
    //   text: "",
    //   date: ""
    // }
  ]);

  const addNote = (title, text) => {
    const d = new Date();
    const date = d.toLocaleDateString();
    const uniqueID = notes.length - 1;

    setNotes([ ...notes, {
        id: uniqueID,
        title: title,
        text: text,
        date: date
    }])
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />;
};

export default Notes;
