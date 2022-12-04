import { Container } from '../../common/components/container/Container';
import './Pizza.css'
export const Pizza = () => {
  const pizza1 = require("./../../../src/media/images/pizza1.jpg")
  const pizza2 = require("./../../../src/media/images/pizza2.jpg")
  const pizza3 = require("./../../../src/media/images/pizza3.jpg")
  const pizza4 = require("./../../../src/media/images/pizza4.jpg")
  return (
    <Container>
    <div>
      <h2> Cheesy Pizza </h2>
    </div>
    <div>
    <img className='img.pizza' src={pizza1} />
    <img className='img.pizza' src={pizza2} />
    <img className='img.pizza' src={pizza3} />
   <img className='img.pizza' src={pizza4} />
    </div>
    </Container>
  )
}
