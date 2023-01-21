import React from "react";
import "./Aboutus.css";
import Header1 from "../components/header1/header1"
import Header2 from "../components/header2/header2";
//import Footer from "../components/footer/footer";
import banner from "../assets/banner1.jpg";
import Overview from "./Overview";
import Studentslife from "./Studentslife";
import Academics from "./Academics"
import banner2 from "../assets/banner2.png";
import {
    BrowserRouter,
    Route,
    Routes,
    useNavigate,
    Outlet,
  } from 'react-router-dom';
import {HashLink as Link} from "react-router-hash-link"  
import { padding } from "@mui/system";


export default function aboutUs() {
    return(
        <div>
            <Header1/>
            <Header2 />
            <div className="banner-img"><img src={banner} alt="" /></div>

            <div style={{fontSize:"20px",margin:"auto",width:"100%",paddingBottom:"30px",backgroundColor:"#FFB833",paddingTop:"20px"}}>
      
        <Link to="#Overview" smooth>Overview</Link> &nbsp;
        <Link to="#Studentslife">Students' life</Link> &nbsp;
        <Link to="#Academics">Academics</Link> &nbsp;
        </div>
        <div className="slide-top"><img src={banner2} alt="" style={{width: "300px",height: "300px",float:"left"}} /> <h2 style={{paddingTop:"130px",color:"black"}} ><b>Your dreams are tied with a key, Our School unlocks it!!!</b></h2></div>

        <div>
        <Overview/><br/><br/><br/><br/>
        <Studentslife/><br/><br/><br/><br/>
        <Academics/>
        {/* <Routes>
          {/* <Route path="/Aboutus/overview" element={<Overview />} />; */}
          {/* <Route path="/Aboutus/aboutstudents" element={<AboutStudents />} />;
          <Route path="/Aboutus/academics" element={<Academics />} />; */}

          {/* <Route path="/aboutus" element={<AboutUs />}>
            <Route path="" element={<AboutUsIndex />} />
            <Route path="history" element={<History />} />
            <Route path="branches" element={<Branches />} />
          </Route> *
        </Routes> */}
      
    </div>

            

        </div>
    )
}


  
  

  