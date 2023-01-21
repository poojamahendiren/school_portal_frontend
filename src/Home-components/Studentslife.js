import React from "react";
import "./Studentslife.css";
import fun1 from "../assets/funactivity1.png";
import fun2 from "../assets/funactivity2.png";
import fun3 from "../assets/funactivity3.png";
import fun4 from "../assets/funactivity4.jpg";
import fun5 from "../assets/funactivity5.png";
import fun6 from "../assets/funactivity6.png";


 export default function Studentslife() {
    return(
        <div id="Studentslife" style={{margin:"0 auto",width:"80%",paddingLeft:"30px",border:"2px solid black",borderRadius: "12px",borderSpacing:"20px",borderCollapse:"separate",paddingRight:"30px"}}>
            <h3 style={{textAlign:"left",fontFamily: "Kalam, cursive",fontSize:"25px"}}>🔸About Student's Life🔸</h3>
            <p style={{textAlign:"left",fontSize:"17px",textIndent: "2em",fontFamily: "Kalam, cursive"}}>🔹 A student life is where connections are made, leadership skills are learned, lifelong bonds are forged and perspectives are pushed. 
                We promote a healthy well-balanced lifestyle with a diversified academic program and a wide range of co-curricular opportunity which develop the student's creativity, critical thinking and collaborative skills. 
                We invite you to explore the student's life section below and learn more about the day-to-day experience.
                If a student wants to start something new that doesn't exist? No problem—we provide them with the support they need to make it happen.</p>
            <h3 style={{textAlign:"left",fontFamily: "Kalam, cursive",fontSize:"25px"}}>🔸Weekly Special Activity🔸</h3>
            <p style={{textAlign:"left",fontSize:"17px",textIndent: "2em",fontFamily: "Kalam, cursive"}}>🔹Teaching does not need to be limited to textbooks and blackboards. 
                With our fun school special activities for kids, learning in school becomes an interesting and enjoyable exercise. 
                There are lots of different school activities for children of all Grades. From back - to - school activities to after-school activities, there are a host of options out there. 
                Parents can choose on their own activity for their children and keep them engaged at the same time.
            </p>
                <div style={{margin: "0 auto",paddingLeft:"80px"}}>
                        <div class="row">
                        <div class="col-4">
                            <img src={fun1} alt="" style={{width: "200px",height: "200px"}}/>
                        </div>
                        <div class="col-4">
                            <img src={fun2} alt="" style={{width: "200px",height: "200px"}}/>
                        </div>
                        <div class="col-4">
                            <img src={fun3} alt="" style={{width: "200px",height: "200px"}}/>
                        </div>
                        </div>

                        <div class="row">
                        <div class="col-4">
                            <img src={fun4} alt="" style={{width: "200px",height: "200px"}}/>
                        </div>
                        <div class="col-4">
                            <img src={fun5} alt="" style={{width: "200px",height: "200px"}}/>
                        </div>
                        <div class="col-4">
                            <img src={fun6} alt="" style={{width: "200px",height: "200px"}}/>
                        </div>
                        </div>
                </div>    
        </div>
    )}


























     