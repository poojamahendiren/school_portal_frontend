import React from "react";
import "./header2.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate, Outlet} from "react-router-dom";
//import Main from "./components/main";



export default function Header2(props) {
  const navigate = useNavigate();

  
  function handleHomeMain(){
    navigate("/Main")
  }
  function handleAboutus(){
    navigate("/Aboutus")
  }
  function handleAcademics(){
    navigate("/Contactus")
  }
  // function handleStaffs(){
  //   navigate("/Staffs")
  // }
  function handleStudents(){
    navigate("/Students")
  }
  
  

  return (
    <div className="header2">
      <Box sx={{
              display: "flex",
              justifyContent: "center",
              margin: "0 20px 10px 0",
              width: "100%",
              color:"white"
            }}>
              <Button sx={{ color: "white",fontSize:"20px", fontFamily:"serif",paddingRight:"25px" }} onClick={handleHomeMain}>Home</Button>&nbsp;
              <Button sx={{ color: "white" ,fontFamily:"serif",fontSize:"20px",paddingRight:"25px" }}onClick={handleAboutus}>About Us</Button>&nbsp;
              <Button sx={{ color: "white" ,fontFamily:"serif",fontSize:"20px",paddingRight:"25px"}}onClick={handleAcademics}>Contact us</Button>&nbsp;
              {/* <Button sx={{ color: "white",fontFamily:"serif",fontSize:"20px",paddingRight:"25px" }}onClick={handleStaffs}>Staffs Portal</Button>&nbsp; */}
              <Button sx={{ color: "white" ,fontFamily:"serif",fontSize:"20px",paddingRight:"25px"}}onClick={handleStudents}>Students Portal</Button>

              
      </Box>
    </div>
  );
}


// import React from "react";
// import "./Main.css";

// export default function Header(props) {
//   return (
//     <div className="main">
//       <h1>{props.message}</h1>
//     </div>
//   );
// }