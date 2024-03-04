
// import React from 'react';
// import './App.css';
// import { Routes, Route} from "react-router-dom";
// import Dashboard from "./dashboard";
// import SignIn from "./sign.js";
// import Login from "./login.js";
// import NavigationBar from './navigation';
// import Upload from './upload';
// function App() {
//   return (
//     <>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path='/upload' element={<Upload/>}/>
//         <Route path="/sign" element={<SignIn/>} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   );
// }
// export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Sign from './sign.js';
import Login from './login.js';
import NavigationBar from './navigation';
import Upload from './upload';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/signup" element={<Sign />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;



