import React from "react";
import { Routes, Route } from 'react-router-dom';

//Components
import Home from "./pages/Home/Home";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
