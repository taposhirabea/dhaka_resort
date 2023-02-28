import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import Buttons from './Buttons'

const TopNav = () => {

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <h7 className='text'> <FaPhone/>+8801712121254 </h7>
          
          <h7 className='text'>  <FaEnvelope />dhakadreamlandpark@gmail.com</h7>
        </div>
       
          <ul className='nav-links'>
          <li><a> <FaFacebook/> </a></li>
          <li><a> <FaInstagram/> </a></li>
          <li><a> <FaLinkedin/> </a></li>
          <li><a> <FaTwitter/> </a></li>
        </ul>
        
        <Buttons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-grey-4);
  color: var(--clr-white);
  box-shadow: 0px 10px 5px white;

  .text {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    svg {
      margin-right: 0.6rem;
    }
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: end;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`
export default TopNav