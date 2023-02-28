import React from 'react'
import styled from 'styled-components'
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container >
      <div className="App">
        <div className="footer">
          <div className="one">
            <img src='https://static.wixstatic.com/media/84b06e_93829702f7c04d3c8a3260e2be4849f0~mv2.jpg/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84b06e_93829702f7c04d3c8a3260e2be4849f0~mv2.jpg' alt='dhaka resort'/>

            <div className="text location"> <FaLocationArrow/> <p className='location-text'> baridhara, kaliakair, gazipur 1750 gazipur, dhaka division, bangladesh</p></div>
            <div className="text email" > 
              <FaEnvelope/>  &nbsp;Hakadreamlandpark@gmail.com 
            </div>
            <div className="text">
              <FaPhone/> &nbsp;&nbsp;+8801712121254
            </div>

          </div>

          {/* second-section start */}
        
          <div className="two">
            <h1 className="top">Explore </h1>
          
            <h3 className="text">
              <ul>
                <li> About Us</li>
                <li> Eco Park</li>
                <li> Events</li>
                <li> Packages</li>
              </ul>
            </h3>
          </div>

          <div className="three">
            <h1 className="top">Resources </h1>

            <h3 className="text">
              <ul>
                <li> FAQ's </li>
                <li> Teams & Conditions </li>
                <li> Privacy Policy </li>
                <li> Contact Us </li>
              </ul>
            </h3>
          </div>

          <div className="four">
            <h1 className="top">Dont't Miss A Thing </h1>

            <h3 className="text details">
              Get update to special deals and exclusive offers. Sign up to our newsletter!
            </h3>
            <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='your email address'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
          </div>

          {/* second-section end */}

        </div>
        <hr className="white"></hr>   
      </div>

      <div className="last">
        <h3 className='address'>copyright {new Date().getFullYear()} dhaka resort. All Rights Reserved</h3>
      </div>
    </Container>
  )
}

const Container = styled.footer`
background-color: var(--clr-grey-3);
min-height: 48vh;
  place-items: center;
  padding: 0 2.8rem;
  padding-top:2.8rem;

  .location{
    display: grid;
    grid-template-columns: 1fr 7fr;
    align-items: baseline;
    text-transform: capitalize;

  }
  .footer {
  width: 100%;
  display: flex;
  
}
.one {
  width: 30%;
  margin: 0 25px;
  text-align: start;
  font-size: .9rem;
}

.two {
  width: 25%;
  height: 2rem;
  margin-top: 1rem;
  padding: 2rem;
  text-align: start;
}

.three {
  width: 25%;
  margin-top: 3rem;
  text-align: start;
}

.four {
  width: 25%;
 margin-top: 3rem;
  text-align: start;
}

hr.red {
  width: 50%;
}

h1 {
  font-size: 1.3rem;
  color: white;
  font-weight: 400;
  margin-bottom: 1.5rem;
}
.email {
  font-size: .9rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  margin: .6rem 0;
}

.top {
  /* text-align: center; */
}
.text {
  color: var(--clr-white);
text-align: start;
  /* text-align: center; */
}
.location-text {
  color: var(--clr-white);
text-align: start;
}
.text ul li{
  margin-bottom: 1.2rem;
}

img {
  background-color: rgb(35, 35, 35);
  width: 60%;
  margin: 2%;
}
hr.white {
  border-top: 1px solid white;
  width: 99%;
}
h4 {
  color: white;
}

.last {
  width: 100%;
  padding: 0.6rem;
  /* margin: 1rem 0; */
}

h3 {
  color: white;
  text-align: start;
  font-size: 1.1rem;
    font-weight: 200;
}
li:hover {
  color: var(--clr-grey-2);
}
.details {
  line-height: 1.5rem;
  font-size: 1rem;
}
.address {
  text-align: center;
  font-size: .8rem;
}

  .contact-form {
    width: 20vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    margin-top: 2rem;
    
  }
  .form-input,
  .submit-btn {
    font-size: .8rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-white);
    border-radius: 30px;
  }
  .form-input {

    position: relative;
    border-right: none;
    color: var(--clr-grey-3);
  
  }
  .form-input::placeholder {
    opacity: 0.6;
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    right: 58px;
    position: absolute;
    background: var(--clr-grey-2);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
`

export default Footer