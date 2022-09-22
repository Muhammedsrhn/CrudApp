import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Addcontact from './pages/Addcontact';
import UpdateContact from './pages/UpdateContact';
import ViewDetails from './pages/ViewDetails';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/addContact" element={<Addcontact />} />
          <Route path="/update/:id" element={<UpdateContact />} />
          <Route path="/view/:id" element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;