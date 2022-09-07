import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import SentMessagesPage from "./pages/SentMessagesPage/SentMessagesPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/messages" element={<SentMessagesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
