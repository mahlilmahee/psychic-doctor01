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
import Resetpassword from './pages/Resetpassword';
import { ToastContainer} from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import Dashboard from './pages/Dashboard';
import MyAppoinment from './MyAppoinment';
import Review from './Review';
// import Appoinment from './pages/Home/Appoinment';
function App() {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };
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
      <Route path="/reset" element={<Resetpassword/>}>
       </Route>
      <Route path="/signup" element={<Signup/>}>
       </Route>
      <Route path="dashboard" element={
         <Privateauth>
        <Dashboard/>
        </Privateauth>
        }>

<Route index element={<MyAppoinment/>}/>
<Route path='review' element={<Review/>}/>

       </Route>

     
      <Route path="*" element={<None />}>
       </Route>
     
      
    </Routes>
   
    <ToastContainer
      toastClassName={({ type }) => contextClass[type || "default"] + 
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-sm font-white font-med block p-3"}
      position="bottom-left"
      autoClose={3000}
    />
    
  
    </div>
  );
}

export default App;
