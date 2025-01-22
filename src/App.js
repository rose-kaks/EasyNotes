import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SummaryOptions from './components/SummaryOptions';
import NoteEditor from './components/NoteEditor';
import UserNotes from './components/UserNotes';
import PublicNotes from './components/PublicNotes';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SummaryOptions />} />
        <Route path="/editor" element={<NoteEditor />} />
        <Route path="/notes" element={<UserNotes />} />
        <Route path="/public" element={<PublicNotes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
