
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer'
import Navbar from "./component/Navbar"
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import SignUp from './component/SignUp';
function App() {
 

  return (
    <>
    <Navbar />
       {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />         {/* Home Page */}
        <Route path="/courses" element={<Courses />} />   {/* About Page */}
        <Route path="/about-us" element={<AboutUs />} />   
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    {/* </Router> */}
    <Footer/>
    </>
  )
}

export default App
