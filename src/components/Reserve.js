import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Reserve = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='reserve-center'>
        <h3 className='title'>
          reserve your stay
        </h3>
        <div  className='content'>
            <form className='content-form'>
                <div className='form-control'>
            <select id="packages" name="packages">
                <option hidden value="packages">Packages</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select>
                </div>
           <div className='form-control'>
            <select id="date" name="date" >
                <option hidden value="packages">Date</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select>
          </div>
           <div className='form-control'>
            <select id="guest" name="guest">
                <option hidden value="packages">Guest</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
  </select>
          </div>
           
           <Link to='/' className='book '>book now</Link>
            </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: var(--clr-grey-10);
padding: 2rem;
.reserve-center{
  width: 100vw;
}

/* align-items: center;
justify-content: center; */
.book {
  background: var(--clr-primary-12);
  color: var(--clr-white);
  text-transform: capitalize;
  padding: .25rem;
  padding-left: 1.6rem;
  height: 2.01rem;
  width: 8rem;
  margin-left: .5rem;
}
   .form-control {
    /* margin-bottom: 1.25rem; */
    padding: .5rem;
    /* margin-right: 2rem; */
    margin: 0;
    
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  
  @media (min-width: 868px) {
    .content-form {
      /* position: sticky;
      top: 1rem; */
      /* display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr; */
      display: flex;
      align-items: center;
      justify-content: center;
      /* width: 95%; */
    }
    select {
      padding: .4rem;
      width: 9rem;
    }
    .reserve-center {
      width: 100vw;

    }
    .content {
      display: flex;
      justify-content: center
    }

  }
`


export default Reserve
