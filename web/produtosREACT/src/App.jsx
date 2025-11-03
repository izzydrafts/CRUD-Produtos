import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

import './App.css';

