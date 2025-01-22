// src/components/SummaryOptions.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SummaryOptions.css';

const SummaryOptions = () => {
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      navigate('/editor', { state: { summary: 'This is a sample summary from the uploaded file.' } });
    }, 2000);
  };

  const handleSpeechToText = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      navigate('/editor', { state: { summary: 'This is a sample summary generated from speech.' } });
    }, 2000);
  };

  return (
    <div className="summary-options">
      <h2>Generate a Summary</h2>
      <div className="option-buttons">
        <button className="option-button" onClick={handleFileUpload} disabled={processing}>
          <span className="icon">📄</span> Upload a PDF
        </button>
        <button className="option-button" onClick={handleSpeechToText} disabled={processing}>
          <span className="icon">🎤</span> Use Speech-to-Text
        </button>
      </div>
      {processing && <p>Processing...</p>}
    </div>
  );
};

export default SummaryOptions;
