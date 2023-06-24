import React from 'react';
import { NavLink } from "react-router-dom";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Tooltip from '@mui/material/Tooltip'; 

const Nav_Buttons = () =>{
    
    return(<>
        <div className="buttons">
        
        <Tooltip title="Upload CSV">
        <NavLink to="/uploadcsv" style={{textDecoration:"none"}} className="uploadCsv_button"> <FileUploadOutlinedIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Upload CSV</NavLink>
        </Tooltip>

        <Tooltip title="check validated list">
        <NavLink to="/validatecsv" style={{textDecoration:"none"}} className="validatedList_button"> <ThumbUpAltIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Validated List 
        </NavLink></Tooltip>

        <Tooltip title="Send Mails">
        <NavLink to="/sendmail" style={{textDecoration:"none"}} className="sendEmail_button"> <ForwardToInboxIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Send Mails</NavLink>
        </Tooltip>
        </div>
        </>);
    }
    
export default Nav_Buttons;
