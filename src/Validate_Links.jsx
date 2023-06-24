import React from 'react';
import { NavLink } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip'; 
import Navbar2 from './Navbar2';
import Button from '@mui/material/Button';
const Validate_links =(props) =>{
    return(<>
        <div className='main_div' style={{height:"100vh"}}>
    <Navbar2/>
    <div className='center_div'>
      <div className="typewriter">
        <h3 className="heading">STEP : 2/3 Validate csv</h3>
      </div>
      <hr/>
          <div className="center_div2">
          <div className="buttons">
            <input type='file' 
            style ={{fontSize : "20px",padding : "5px"}} className="uploadCsv_button" onChange={props.handleFileChange}/>

            <Tooltip title="Upload">
             <Button style={{textDecoration:"none"}} className="upload_btn" onClick={props.handleParse}><FileUploadOutlinedIcon/>Upload</Button>
            </Tooltip>

            <Button variant="text" onClick={props.validate} className="upload_btn"><CheckIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Validate</Button>

            <Tooltip title="check validated list">
            <NavLink to="/validatecsv" style={{textDecoration:"none"}} className="validatedList_button"> <ThumbUpAltIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Validated List 
            </NavLink></Tooltip>

            <Tooltip title="check invalid list">
            <NavLink to="/validatecsv" style={{textDecoration:"none"}} className="validatedList_button"> <ThumbDownAltIcon style={{paddingLeft:"5px",paddingRight:"5px"}}/>Validated List 
            </NavLink></Tooltip>
            </div>
          </div>
        </div>
      </div>
        </>);
}
export default Validate_links;