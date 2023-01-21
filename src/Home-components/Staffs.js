import React from "react";
import img from "../assets/teacher.png";


export default function Staff() {
    return(
        <div>
                    <div style={{backgroundColor:"#FFB833",width:"100%",height:"790px" }}>
                        <div style={{paddingLeft:"100px"}}>
                        <img src={img} alt="" style={{width: "500px",height: "500px",float:"left"}}/>
                        </div>
                        <div style={{float:"left",paddingTop:"200px",paddingLeft:"150px"}}>
                            <p style={{fontFamily: "Abril Fatface, cursive",color:"indigo",fontSize:"30px"}}><b><b></b> A teacher takes a hand, opens a mind,<br/> 👩‍🏫 and touches a heart !!!</b></p>
                        </div>
                    </div>
                            
        </div>
        
    )}