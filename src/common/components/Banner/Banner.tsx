import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

export const Banner = () => {
  const pizza = require("./../../../media/images/pizza.jpg")
  const sndwch = require("./../../../media/images/sndwch.jpg")
  const burger = require("./../../../media/images/burger.jpg")
  
  return (
    <Carousel showThumbs={false} autoPlay={true}>
                <div>
                    <img className='img' src={pizza} />
                    
                </div>
                <div>
                    <img className='img' src={sndwch} />
                    
                </div>
                <div>
                    <img className='img' src={burger} />
                    
                </div>
            </Carousel>

  )
}
//     