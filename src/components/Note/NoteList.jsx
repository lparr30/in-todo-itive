import Note from "./Note";
import AddNote from "./AddNote";

function NoteList({ notes, handleAddNote, handleDeleteNote }) {
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
