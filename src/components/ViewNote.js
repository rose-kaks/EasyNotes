import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
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

  const convertText = async (text) => {
    try {
      const response = await fetch("/simplify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_text: text }),
      });
      const data = await response.json();
      setConvertedText(data.output_text || "Failed to simplify text.");
    } catch (error) {
      console.error("Error simplifying text:", error);
      setConvertedText("An error occurred.");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Arial", isDyslexicFont ? "normal" : "bold");
    doc.text(`Title: ${note.title}`, 10, 10);
    doc.text(convertedText || note.text, 10, 20);
    doc.save(`${note.title}.pdf`);
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
      <button onClick={downloadPDF}>Download as PDF</button>

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
