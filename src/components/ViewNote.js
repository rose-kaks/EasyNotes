// src/components/ViewNote.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ViewNote.css";

const ViewNote = () => {
  const location = useLocation();
  const { note } = location.state || {};

  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [convertedText, setConvertedText] = useState("");

  if (!note) {
    return <p>Note not found!</p>;
  }

  const toggleFont = () => {
    setIsDyslexicFont(!isDyslexicFont);
  };

  const convertText = (text) => {
    setConvertedText(text);
  };

  const downloadNote = () => {
    const element = document.createElement("a");
    const fileContent = `Title: ${note.title}\n\n${note.text}`;
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="view-note">
      <h2 className={isDyslexicFont ? "dyslexic-font" : ""}>{note.title}</h2>
      <p className={isDyslexicFont ? "dyslexic-font" : ""}>{note.text}</p>
      {note.images && note.images.length > 0 && (
        <div className="note-images">
          {note.images.map((image, index) => (
            <img key={index} src={image} alt={`Note Visual ${index + 1}`} />
          ))}
        </div>
      )}
      <button onClick={toggleFont}>
        {isDyslexicFont
          ? "Switch to Regular Font"
          : "Switch to Dyslexic-Friendly Font"}
      </button>
      <button onClick={downloadNote}>Download Note</button>

      {/* Text Converter Section */}
      <div className="converter-section">
        <h2>Text Converter</h2>
        <textarea
          id="inputText"
          placeholder="Type or paste your text here..."
          onChange={(e) => convertText(e.target.value)}
        ></textarea>
        <div
          id="outputText"
          className={`output-text ${isDyslexicFont ? "dyslexic-font" : ""}`}
        >
          {convertedText || "Your converted text will appear here..."}
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
