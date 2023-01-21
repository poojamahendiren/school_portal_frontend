import React from "react";
import login from "../assets/login.jpg";
import {Typography, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
//import { createTheme, ThemeProvider } from "@mui/system";




function Login(){
    // const theme = createTheme({
    //     typography:{
    //         color:"blue"
    //     }
    // })
    return(
        <div>
            <div>
                <p style={{fontFamily: "Kalam, cursive",color:"#FF1493",fontSize:"30px"}}><b>Subiksham International School</b></p>
            </div>
        <div class="bg_img"
        style={{
            backgroundImage:`url(${login})`,
            backgroundSize:"cover",
            height:"70vh",
            // backgroundSize:"800px 500px",
            // backgroundRepeat:"no-repeat",
            display:"block",
            marginLeft:"auto",
            marginRight:"auto",
            width:"50%"
        }}>
            <div style={{margin:'5%',paddingTop:"120px"}}>
                {/* <Typography variant="h4" component="div"> Login </Typography> <br/> <br/> */}
                <p style={{color:"blue"}}><b><u>Signin Yourself</u></b></p>
            
            <form > 
                <div>
                    < TextField type="text" name="email" label="Email"
                    //value={email} 
                    //onChange={(e) => setEmail(e.target.value)}
                    />
                </div> <br/>
                <div>
                    <TextField label="Password" type="password" name="password" 
                    //value={password} 
                    //onChange={(e) => setPassword(e.target.value)}
                     />
                </div> <br/>
                {/* <Button variant="contained" type="submit" > Submit </Button> */}
                
                <Link
                          to={"/main"}
                          
                        ><button >
                          Login
                          </button>
                        </Link><br/><br/>
                <button>Forget Password</button>
                      

            </form>
        </div>
        </div>
        </div>
    )};
    export default Login;



                         <Link
                           to={"/dashboard"}
                           class="btn btn-primary btn-user btn-block"
                         >
                           Login
                         </Link>