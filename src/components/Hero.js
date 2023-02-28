import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Wrapper className='hero-center'>

      <div className='content'>
        <img src='https://cdn.pixabay.com/photo/2016/05/03/14/05/bahrain-1369259_960_720.jpg' alt='hero' className='hero'/>
        <Link to='/' className='btn hero-btn'>
          view all packages
        </Link>
      
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  margin: 0;
  width: 100%;
  .hero {
    opacity: 0.9;
    display: block;
    position: relative;

  }
  @media (min-width: 992px) {

    .hero {
      width: 100vw;
      max-height: 90vh;
      
    }
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      position: absolute;
      top: 70%;
      left: 44%;
      border-radius: 50px;
      background: var(--clr-white);
      color: var(--clr-primary-12);
      border: 1px solid var(--clr-primary-12);
      font-weight: 500;
    }
    
  }
`

export default Hero