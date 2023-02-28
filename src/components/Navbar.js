import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'

const Nav = () => {

  return (
    <NavContainer >

      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src='https://static.wixstatic.com/media/84b06e_93829702f7c04d3c8a3260e2be4849f0~mv2.jpg/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84b06e_93829702f7c04d3c8a3260e2be4849f0~mv2.jpg' alt='dhaka resort' />
          </Link>
          
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>

      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
    background: var(--clr-primary-12);
    color: var(--clr-white);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    /* background: var(--clr-primary-11); */
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 115px;

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
      justify-content: flex-end;
      li {
        margin: 0 1.3rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: uppercase;
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

export default Nav