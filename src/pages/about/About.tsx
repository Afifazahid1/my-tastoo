import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Container } from '../../common/components/container/Container';
import "./About.css";
export const About = () => {
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"}>

        <Stack>

        
 <div className="card">
      <div className="imgbox">
        <img
          src="./aaa.jpeg"
        />
      </div>

      <div className="content">
        <h2>Dr Afifa Zahid</h2>
        <p>
          Hello I am a MERN STACK DEVELOPER
        </p>
      </div>
    </div>
    </Stack>
   
   <Stack>
    <div className="card">
      <div className="imgbox">
        <img
          src="./zaib.jpg"
        />
      </div>
      <div className="content">
        <h2>Shahzaib Ashraf</h2>
        <p>
        Hello I am a MERN STACK DEVELOPER
        </p>
      </div>

      
    </div>
    </Stack>

     {/* <div>
     <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="/w3images/team1.jpg" alt="Jane" />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO  Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div> */}

 
  
  {/* <div className="column">
    <div className="card">
      <img src="/w3images/team3.jpg" alt="John" />
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

    </div> */}
    </Stack>
    </Container>
  )
}
