import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom' 
import styled from 'styled-components'

export default function Package({ images, name,id }) {
  return (
    <Wrapper>

        <div className='container'>
        <img src={images} alt='single package' />
        <Link to={`/packages/${id}`} className='link'>
          <FaSearch />
        </Link>

        <div className='box'>
            <h2 className='name'>{name}</h2>
            {/* <p>{price}</p> */}
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.article`
width: 25vw;
/* display: flex;
align-items: center;
justify-content: space-around; */
.box {
    background: var(--clr-white);
}
.name {
    font-size: 1rem;
    padding: 1.2rem;
    align-self: center;
    justify-self: auto;
    text-align: center;
}
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`