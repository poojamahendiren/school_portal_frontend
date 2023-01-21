import React from "react";
import "./footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Header(props) {
  return (
    <div className="footer">
      <p style={{fontFamily: "Pacifico, cursive",paddingLeft:"20px",display:"inline-block"}}>Achieving Excellence Together<MenuBookIcon style={{fontSize: "2.2rem",display:"inline-block"}}/></p>
      
      <InstagramIcon style={{float:"right",fontSize: "2.2rem",display:"inline-block"}}/>
      <MailOutlineIcon style={{fontSize: "2.2rem",float:"right",display:"inline-block"}}/>
      <TwitterIcon style={{fontSize: "2.2rem",float:"right",display:"inline-block"}}/>
    </div>
  );
}