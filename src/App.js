import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SummaryOptions from "./components/SummaryOptions";
import NoteEditor from "./components/NoteEditor";
import UserNotes from "./components/UserNotes";
import PublicNotes from "./components/PublicNotes";
import ViewNote from "./components/ViewNote";
import ColorContrastChecker from "./components/ColorContrastChecker";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<SummaryOptions />} />
        <Route path="/editor" element={<NoteEditor />} />
        <Route path="/user-notes" element={<UserNotes />} />
        <Route path="/public-notes" element={<PublicNotes />} />
        <Route path="/view-note" element={<ViewNote />} />
        <Route path="/contrast-checker" element={<ColorContrastChecker />} />
      </Routes>
    </Router>
  );
};

export default App;
