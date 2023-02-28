import React from 'react'
import Button from './Button'
import styled from 'styled-components'

export default function Offers() {
  return (
    <Wrapper className='offers-center'>

        <img src='https://cdn.pixabay.com/photo/2016/05/03/14/05/bahrain-1369259_960_720.jpg' alt='hero' className='offer-img'/>
        <div className='title'>
          <h2>discover special offers</h2>
        <h6>Make sure to check out these special promotions</h6>
        <Button title='view all offers' className='btn'/>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--clr-black);
     align-items: center;
    justify-content: center;
  .title{  
  position: absolute;
  color: var(--clr-white);
  }
  .offer-img {
    opacity: 0.9;
    display: block;
    position: relative;

  }
h2{
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 400;
}
h6{
  font-size: 1.2rem;
   font-weight: 350;
}
.btn {
  background: var(--clr-white);
  color: var(--clr-primary-12);
  margin-top: 3rem;
}
@media (min-width: 992px) {

    flex-direction: row;
    .offer-img {
      width: 100vw;
      max-height: 90vh;
      
    }
    
    
  }
  
`