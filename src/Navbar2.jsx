import React from "react";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";


const Navbar2 = (props)=>{

return(
    <>
    <div className="navbar2">
    <Link to = "/" style={{textDecoration:"none",fontSize:"large"}} > <Button className="nav_title1" style={{paddingTop:"5%"}}>Exposys DataLabs</Button></Link>
    <Link to = "/" style={{textDecoration:"none"}}><Button variant="text" className="nav_button"><HomeIcon style={{padding:"5%"}}/>Home</Button> </Link>
     <Link to = "/about"  style={{textDecoration:"none"}}><Button variant="text" className="nav_button" style={{padding:"0px 7px"}}>About Us</Button></Link>
     
    </div>
      
    </>
);
};


export default Navbar2;