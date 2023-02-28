import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Button({title}) {
  return (
    <Wrapper>
        <Link to='/' className='btn hero-btn'>
          {title}
        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`

@media (min-width: 992px) {

  .hero-btn {
    width: 12.6rem !important;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        top: 70%;
        left: 44%;
        border-radius: 50px;
        /* background: var(--clr-white);
        color: var(--clr-primary-12); */
        
        font-weight: 500;
      }
}
`