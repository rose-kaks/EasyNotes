// src/components/NoteEditor.js
import React, { useState } from 'react';
import './Notes.css';

const NoteEditor = () => {
  const [note, setNote] = useState('This is a sample summarized note.');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    alert('Note saved!');
  };

  return (
    <div className="note-editor">
      <textarea
        value={note}
        onChange={handleChange}
        rows="10"
        cols="50"
      ></textarea>
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default NoteEditor;
