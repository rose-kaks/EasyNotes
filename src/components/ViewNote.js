// src/components/ViewNote.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ViewNote.css';

const ViewNote = () => {
  const location = useLocation();
  const { note } = location.state || {};

  if (!note) {
    return <p>Note not found!</p>;
  }

  return (
    <div className="view-note">
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      {note.images && note.images.length > 0 && (
        <div className="note-images">
          {note.images.map((image, index) => (
            <img key={index} src={image} alt={`Note Visual ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewNote;
