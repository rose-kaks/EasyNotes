// src/components/UserNotes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotesGrid.css';

const UserNotes = () => {
  const navigate = useNavigate();
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const userNotes = notes.filter((note) => !note.isPublic);

  const openNote = (note) => {
    navigate('/editor', { state: { summary: note.text, title: note.title, images: note.images } });
  };

  return (
    <div className="notes-page">
      <h2>Your Private Notes</h2>
      {userNotes.length > 0 ? (
        <div className="notes-grid">
          {userNotes.map((note) => (
            <div className="note-card" key={note.id} onClick={() => openNote(note)}>
              <h3>{note.title}</h3>
              <p>{note.text.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No private notes available. Start creating one!</p>
      )}
    </div>
  );
};

export default UserNotes;
