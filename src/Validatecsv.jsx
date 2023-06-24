import React from 'react'
import Navbar2 from './Navbar2';
import {res} from './UploadCsv';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip'; 
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
const Validatecsv = () =>{
 
  return(
    <>
    <div className='main_div'>
    <Navbar2/>
    <div className='center_div'>
        <div className="center_div2">
          <div className='invalid_div'>
            <p style={{paddingTop:"20px"}}>
            <Link to ="/invalidemails" > Click Here to view Invalid Mails
            </Link></p>
          </div>
          <h2>VALID LIST</h2>
          <ol>
            <p style={{fontWeight : "500" }}>{res.map(mails=><h4><li>{mails}</li></h4>)}
            </p>
         </ol>
            <Tooltip title="check invalid list">
            <NavLink to="/Invalidemails" style={{textDecoration:"none"}} className="validatedList_button"> <ThumbDownAltIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Invalid List 
            </NavLink></Tooltip>
            <Buttons/>
        </div>
      </div>
    </div>
  
      
    </>
  );


}
export default Validatecsv;