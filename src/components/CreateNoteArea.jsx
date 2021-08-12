import React, { useState } from "react";

function CreateNoteArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    props.addNote(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <form>
      <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>
      <textarea
        onChange={handleChange}
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={newNote.content}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default CreateNoteArea;
