import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNoteArea from "./CreateNoteArea";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };
  const deleteNote = (noteId) => {
    setNotes((prevValue) => {
      return [...prevValue].filter((note, index) => index !== noteId);
    });
  };

  return (
    <>
      <Header />
      <CreateNoteArea addNote={addNote} />
      {notes.map((note, idx) => (
        <Note
          key={idx}
          noteId={idx}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
