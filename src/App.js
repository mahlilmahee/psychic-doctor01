import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Home/Shared/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Shared/Home';
import None from './pages/Home/None';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Appoinment from './pages/Home/Appoinment/Appoinment';
import Signup from './pages/Signup';
import Privateauth from './pages/Home/Shared/Privateauth';
// import Appoinment from './pages/Home/Appoinment';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>


      <Routes>

      <Route path="/" element={<Home />}>
       </Route>
      <Route path="/contact" element={<Contact />}>
       </Route>
      <Route path="/about" element={<About />}>
       </Route>
      <Route path="/appoinment" element={
         <Privateauth>
        <Appoinment/>
        </Privateauth>
        }>
       </Route>
      <Route path="/login" element={<Login/>}>
       </Route>
      <Route path="/signup" element={<Signup/>}>
       </Route>
      <Route path="*" element={<None />}>
       </Route>
     
      
    </Routes>

  
    </div>
  );
}

export default App;
