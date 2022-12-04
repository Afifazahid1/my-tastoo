import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { Container } from '../../common/components/container/Container';
import './Burger.css';
   export  const Burger = () => {
  
  const burger1 = require("./../../../src/media/images/burger1.jpg")
  const burger2 = require("./../../../src/media/images/burger2.jpg")
  const burger3 = require("./../../../src/media/images/burger3.jpg")
  const burger4 = require("./../../../src/media/images/burger4.jpg")
  const burger5 = require("./../../../src/media/images/burger5.jpg")
  const burger6 = require("./../../../src/media/images/burger6.jpg")
  return (
    <Container>
    <div>
      <h2>Hand-Crafted Burgers</h2>
    
    </div>
    
    <div>
    
      <img className='img.burg ' src={burger1}  />
      <img className='img.burg ' src={burger2} />
      <img className='img.burg ' src={burger3} />
      <img className='img.burg ' src={burger4} />
      <img className='img.burg ' src={burger5} />
      <img className='img.burg ' src={burger6} />
      
    </div>
    </Container>
  )
}

