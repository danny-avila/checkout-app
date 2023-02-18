import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Checkout from './routes/Checkout';
// import axios from 'axios';
// import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route
        element={<Home />}
        path="/"
      />
      <Route
        path="/checkout"
        element={<Checkout />}
      />
      {/* <Route path="/contact">
          <Contact />
        </Route> */}
    </Routes>
  );
}

export default App;
