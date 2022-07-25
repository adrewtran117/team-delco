import Navbar from "./Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SpatialPage from "./Pages/Exploration"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spatial" element={<SpatialPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App



// import React from 'react';
// import './App.css';
// import SpatialPage from './Pages/Exploration';
// import Home from './Pages/Home';
// import About from './Pages/About';

// function App() {
//   return (
//     <div className="App">
//         <SpatialPage/>
//     </div>
//   );
// }

// export default App;
