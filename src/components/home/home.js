import React from "react";
import home1 from "../../assets/home1.svg";
import Box from '@mui/material/Box';
import tree from "../../assets/img2.png";
import kid from "../../assets/kid.png";
import "./home.css";



function Home(){
    return(
        <div class="bg_img"
        style={{
            backgroundImage:`url(${home1})`,
            backgroundSize:"cover",
            height:"90vh"
        }}
        >
    {/* <Box
      sx={{
        width: 300,
        height: 300,
        
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      /> */}
                
          <div class="container">
          {/* <div id="img1">
                <img src={tree} width="150" height="220" alt="logo" float="left"  style={{filter:"brightness(100) contrast(50)"}}/>
                </div> */}
            <div id="img2">
            <p style={{color:"white",fontFamily: "Poor Story, cursive",fontSize:"50px" }}><u><b>Subiksham International School</b></u></p>
            <p style={{color:"white",fontSize:"30px",fontFamily: "Dancing Script, cursive"}}><b>School Of Excellence</b></p>
            </div>
            <div id="img3"><img src={kid} width="400" height="300" alt=""/></div>
            </div>
            {/* <div className="kid-img"><img src={kid} alt="" align="right" style={{align:"right"}} /></div> */}
        
        </div>

    );
}
export default Home;