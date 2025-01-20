// src/components/PublicNotes.js
import React from 'react';
import './Notes.css';

const PublicNotes = () => {
  const publicNotes = [
    { id: 1, content: 'Public Note 1' },
    { id: 2, content: 'Public Note 2' },
  ];

  return (
    <div className="public-notes">
      <h2>Public Notes</h2>
      <ul>
        {publicNotes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublicNotes;
