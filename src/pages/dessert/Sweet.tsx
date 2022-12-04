import React from 'react'
import { Container } from '../../common/components/container/Container';
const sweet = () => {
  const sweet1 = require("./../../../src/media/images/sweet1.jpg")
  const sweet2 = require("./../../../src/media/images/sweet2.jpg")
  const sweet3 = require("./../../../src/media/images/sweet3.jpg")
  const sweet4 = require("./../../../src/media/images/sweet4.jpg")
  return (
    <Container>
    <div>
      <h2> Dessert Meets
      </h2>
    </div>
    <div>
      
      <img className='img.sweet' src={sweet1} />
      <img className='img.sweet' src={sweet2} />
      <img className='img.sweet' src={sweet3} />
      <img className='img.sweet' src={sweet4} />
      
      </div>
    
    </Container>
  )
}

export default sweet