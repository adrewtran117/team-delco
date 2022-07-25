import Navbar from "./Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SpatialPage from "./Pages/Exploration"
import { Route, Routes } from "react-router-dom"
import Particlesjs from "./Components/particles"
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spatial" element={<SpatialPage/>} />
        </Routes>
        <Particlesjs/>

      </div>
    </>
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
