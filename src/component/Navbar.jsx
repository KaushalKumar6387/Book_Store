import { useEffect, useState } from "react";
import logo from "../assets/book.png";
import { FaSun, FaMoon } from 'react-icons/fa'; // For icons
import { Link } from "react-router-dom";




function Navbar() {
   const [darkMode, setDarkMode] = useState(false);

   const [sticky, setSticky]=useState(false)
useEffect(()=>{
function handleSticky(){
  if(window.scrollY>0)
  {
    setSticky(true);
  }else{
    setSticky(false);
  }
}

window.addEventListener('scroll',handleSticky);
return ()=>{
  window.removeEventListener('scroll',handleSticky);
}
},[]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Must be inside the component
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };


  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link >
        {/* <a href="">Home</a> */}
      </li>
      <li>
        <Link to="/courses">Course</Link>
        {/* <a href="">Courses</a> */}
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
        {/* <a href="">About Us</a> */}
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
        {/* <a href="">Contact Us</a> */}
      </li>
    </>
  );
  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${
        sticky?"sticky-navbar shadow-sm bg-base-200  duration-300 ease-in-out z-50":""
      }`}>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItem}
              </ul>
            </div>

            <a className="btn btn-ghost text-xl">
              <img src={logo} alt="" style={{ height: "30px" }} />
              <span className="text-[#00c4ea]">Book<span className="text-[#c30f70]">verse</span></span>
             
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItem}</ul>
            </div>
           <div className="hidden md:block mx-2">
             <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" />
            </label>
           </div>
           {/* <div>
             <button onClick={toggleDarkMode} className="dark-toggle-btn btn-sm">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
           </div> */}
            <div>
              <a className="btn  btn-neutral shadow-none ">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
