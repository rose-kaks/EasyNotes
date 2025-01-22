import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SummaryOptions from './components/SummaryOptions';
import NoteEditor from './components/NoteEditor';
import UserNotes from './components/UserNotes';
import PublicNotes from './components/PublicNotes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummaryOptions />} />
        <Route path="/editor" element={<NoteEditor />} />
        <Route path="/notes" element={<UserNotes />} />
        <Route path="/public" element={<PublicNotes />} />
      </Routes>
    </Router>
  );
};

export default App;
