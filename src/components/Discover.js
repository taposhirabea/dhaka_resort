import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'
import {FaCheckCircle} from 'react-icons/fa'

const Discover = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          why choose dhaka resort?
        </h1>
        <p className='title-name'>
          dhaka resort is a place where modern amenities maintain strong rapport with nature.
        </p>
        
      </article>
      <div className='discover-center'>
        <article className='img-container'>
        <div className='img-1'>
          <img src='https://cdn.pixabay.com/photo/2016/07/16/14/20/holiday-house-1522051_960_720.jpg' alt='nice table' className='main-img' />
          </div>
        <div className='img-2'>
          <img src='https://cdn.pixabay.com/photo/2016/07/16/14/20/holiday-house-1522051_960_720.jpg' alt='nice table' className='main-img' />
          </div>
          <div className='img-3'>
          <img src='https://cdn.pixabay.com/photo/2016/07/16/14/20/holiday-house-1522051_960_720.jpg' alt='nice table' className='main-img' />
          </div>
          <div className='img-4'>
          <img src='https://cdn.pixabay.com/photo/2016/07/16/14/20/holiday-house-1522051_960_720.jpg' alt='nice table' className='main-img' />
          </div>
      </article>
      <article className='details-container'>
        <p className='details'>we offer organic foods produced in our own yard. we also feel honored to host your events like wedding, anniversary, birthday party and many more.</p>
        <ul>
          
          <li><FaCheckCircle/>Different type of cottages</li>
          <li><FaCheckCircle/>family picnic zone</li>
          <li><FaCheckCircle/>swimming pool</li>
          <li><FaCheckCircle/>shooting zone</li>
          <li><FaCheckCircle/>eco park</li>
        </ul>
        <Button title='discover offer' className='btn'></Button>
      </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  place-items: center;
  padding: 2rem;
  .img-1{
    padding: 0 0 2rem 2rem;
    border-radius: 1rem;

  }
  .img-2{
    border-radius: 1rem;
    padding: 2rem 0 0 0;
  }
  .img-3{
    padding: 0 0 1rem 1rem;
    top: 70%;
    left: 44%;
    /* position: absolute; */
    width: 100%;
  }
  .img-4{
    padding: 0 2rem 0 0 ;
    border-radius: 1rem;
  }

  .img-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  ul li {
    text-transform: capitalize;
    align-items: center;
  }
  .btn{
    background: var(--clr-primary-12);
    color: var(--clr-white);
    margin-top: 2rem;
  }
.discover-center {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
}
.content {
  text-align: center;
  .title-name {
    font-size: 1rem;
    width: 25rem;
    text-transform: capitalize;
    margin-left: 19rem;
  }
}
  .details {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 1rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    /* .img-container {
      display: block;
    } */
    .main-img {
      width: 100%;
      height: 150px;
      border-radius: 1rem;
      display: block;
      object-fit: cover;
    }
    .accent-img {
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    
  }
`

export default Discover