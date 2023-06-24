import React from "react";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from "react";
import { signInWithGoogle } from "./Firebase";
{/*import { logged } from "./Firebase";*/}
const Navbar1 = ()=>{
    return(

    <>
    <div className="navbar">

        <div className="nav_title">Exposys DataLabs</div>

        <div className="button_div">

             <Button variant="text" className="nav_button" onClick={signInWithGoogle}> <LoginIcon className="login_Icon" color="white" />Log in</Button>
            
              {/*  {logged() ? <p>hello</p> : null}*/}

        </div>
    </div>
    </>
);
};


export default Navbar1;
