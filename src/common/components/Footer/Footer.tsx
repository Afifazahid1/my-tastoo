
import {  Stack } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, Outlet } from "react-router-dom";

import "./Footer.css";


export const Footer = () => {
  return (
    <div  style={{height:'400px', width:'100%',padding:'0', margin:'0', backgroundColor:'#29021A', borderTop: '1px solid #ddd', lineHeight: '60px'  }}>
     <h2>Find us on</h2>
     <Stack direction={'row'} justifyContent={'center'} gap={'10px'}> 
      <FacebookIcon color='primary' sx={{ fontSize: 40 }} />
      < YouTubeIcon color='error' sx={{ fontSize: 40 }} />
      < InstagramIcon sx={{ fontSize: 40 }} />
      
       </Stack>
       <Stack direction={'row'}>
        <Stack sx={{width:"25%" ,height:"60%" ,backgroundColor:'primary'}} direction={'column'}>
        <a href="#">Information</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Location</a>
        </Stack>
        <Stack sx={{width:"25%" ,height:'60%',backgroundColor:'error'}} direction='column'>
        <a href="#">Hot Selling Items</a>
       
        <a href="#">Branches</a>
        </Stack>
        <Stack sx={{width:"25%" , height:'60%',backgroundColor:'secondary'}}>
        <a href="#">Terms & Condition</a>
        <ul className="links-container">
         <li className="link">
           <Link to="/terms">Terms & Condition</Link>
         </li>
         </ul>
        
        <a href="#">Privacy Policy</a>
        
        </Stack>
        
       </Stack>
       
      
    </div>
    
  )
}