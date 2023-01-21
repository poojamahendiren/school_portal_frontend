import React from "react";
import {Typography, TextField,TextareaAutosize,Button} from '@mui/material';
import img from "../assets/contactus.png"

export default function Contactus() {
    return(
        <div style={{paddingLeft:"150px",width:"100%",height:"780px",backgroundColor:"#FFB833"}}>
            <h1 style={{fontFamily: "Dancing Script ,cursive",margin:"0",textAlign:"center",fontSize:"30px"}}>Our team is here to help you 📞📞</h1><br/><br/>
            <div style={{textAlign:"left", width:"400px",height:"600px",width: "fit-content",border:"2px solid black",borderRadius: "12px",float:"left",paddingLeft:"140px",paddingTop:"30px",backgroundColor:"#7DF9FF"}}>
                    <form style={{height:"550px",width:"460px"}}>
                            <TextField id="standard-basic" label="Name" variant="standard" /><br/><br/><br/>
                            <TextField id="standard-basic" label="Email" variant="standard" /><br/><br/><br/>
                            <TextField id="standard-basic" label="Location" variant="standard" /><br/><br/><br/>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Queries"
                                style={{ width: 300,height:200 }}
                            /><br/><br/>
                            <Button variant="outlined">
                            Send
                            </Button>
                            
                    </form>

            </div>
            <div style={{float:"left",paddingLeft:"180px",paddingTop:"80px"}}>
            <img src={img} alt="" style={{width: "500px",height: "500px"}}/>
            </div>
        </div>

    )}