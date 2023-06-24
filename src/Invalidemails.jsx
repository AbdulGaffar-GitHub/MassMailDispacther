import React from "react";
import Buttons from './Buttons';
import Navbar2 from "./Navbar2";
import { notres } from "./UploadCsv";



const Invalidemails = () =>{

    return(
        <>
        <div className='main_div'>
         <Navbar2/>
            <div className='center_div'>
            <h2>INVALID MAILS</h2>
            <ol>
               <p style={{fontWeight : "500" }}>{notres.map(mails=><h4><li>{mails}</li></h4>)}
               </p>
            </ol>
            <Buttons/>
            </div>
        </div>
        </>
    );
};
export default Invalidemails;