
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer'
import Navbar from "./component/Navbar"
import Courses from './pages/Courses'
import Home from './pages/Home'
function App() {
 

  return (
    <>
    <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />         {/* Home Page */}
        <Route path="/courses" element={<Courses />} />         {/* Home Page */}
       
      </Routes>


    <Footer/>
    </>
  )
}

export default App
