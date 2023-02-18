import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
// import axios from 'axios';
// import About from './About';
// import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
      >
        <Home />
      </Route>
      {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
    </Routes>
  );
}

export default App;
