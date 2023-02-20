import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
