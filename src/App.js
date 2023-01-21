import React from "react";
import "./style.css";
// import Header1 from "./components/header1/header1"
// import Header2 from "./components/header2/header2";
//import Footer from "./components/footer/footer";
import { Routes, Route} from "react-router-dom";
import Main from "./components/main";
import Aboutus from "./Home-components/Aboutus";
import Academics from "./Home-components/Academics";
import Staffs from "./Home-components/Staffs";
import Students from "./Home-components/Students";
import  Login from "./Home-components/Login";
import Contactus from "./Home-components/Contactus";
import Update from "./Home-components/Update";
import AddStudent from "./Home-components/Add";

export default function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Main" element={<Main />} />
         <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Contactus" element={<Contactus />} />
        {/* <Route path="/Staffs" element={<Staffs />} /> */}
        <Route path="/Students" element={<Students/>} />
        <Route path="/students/:stdID/update" element={<Update/>}/>
        <Route path="/students/add" element={<AddStudent/>} />
         
        
      </Routes>
    </div>
  );
}