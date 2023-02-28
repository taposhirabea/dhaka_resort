import React from 'react'
import { FaLock, FaUser} from 'react-icons/fa'

import styled from 'styled-components'

const Buttons = () => {

  return (
    <Wrapper className='sign-btn-wrapper'>

      <button type='button' className='login-btn' >
           <FaLock />  login
        </button>

      <button type='button' className='signup-btn'>
           <FaUser />  sign up
        </button>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .login-btn {
    padding: 0.3rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clr-white);
    border-radius: 1rem;
    border-color: transparent;
    font-size: .9rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    margin-right: 0.7rem;
    svg {
      margin-right: 5px;
    }
  }
  .signup-btn {
    padding: 0.3rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clr-grey-5);
    border-color: transparent;
    border-radius: 1rem;
    font-size: .9rem;
    cursor: pointer;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    svg {
      margin-right: 5px;
    }
  }
`
export default Buttons