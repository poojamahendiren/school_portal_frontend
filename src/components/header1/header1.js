import React from "react";
import "./header1.css";
import logo from "../../assets/img1.PNG";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Margin } from "@mui/icons-material";

const categoryStyles = {
  color: "black",
  padding: "0 2%",
  fontSize: "1rem",
  borderRadius: "0",
  display: "inline-block",
  transition: "all 0.6s ease-in-out",
  ":hover": {
    fontSize: "1.25rem",
    //color: (theme) ? "white" : "black"
  }
}

const style = {
  display: "block",
  position: "fixed",
  //background: (theme) ? "rgba(40, 30, 0, 1)" : "rgb(50, 40, 30)",
  width: "100%",
  justifyContent: "space-between"
  
}


 export default function Header1() {
  return (
<div>
     <div  sx={style}>
     <img src={logo} width="70" height="40" alt="logo" align="left" />
     </div>


    <h3 className="header1" style={{textAlign:"left",paddingLeft:"70px"}}>Subiksham International School</h3>

    
       {/* <div sx={{ display: "flex",alignItems:"right",display:"inline-block" }}> */}
    
           
              <LogoutIcon
                sx={{
                  alignItems:"center",
                  fontSize: "2.2rem",
                  color: "black",
                  display:'flex',
                  flexWrap:'wrap-reverse',
                  marginLeft:'90%',
                  //justifyContent:'end',
                   transition : "all 0.6s ease-in-out",
                   ":hover": {
                     transform: "scale(1.25)",
                  //   //color: (theme) ? "white" : "black"
                  
                   },
                  
                }}/>
                         

           
      
     </div>
)}

      //textAlign:'left', fontFamily:"serif" ,fontWeight: "700", fontSize: "1.5rem",
      
            
  



