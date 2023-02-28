import React from 'react'
import { usePackagesContext } from '../../context/package_context'
import { Link } from 'react-router-dom'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import styled from 'styled-components'
import Package from './Package'
import Button from '../Button'

const FeaturedPackages = () => {
  const { featuredPackages: featured } = usePackagesContext()
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>find our popular packages</h2>
        <div className='arrow'>
          <FaArrowLeft/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaArrowRight/>
        </div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map((item) => {
          return <Package key={item.id} {...item} />
        })}
      </div>
      <Button title='view all packages' className='btn'></Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 2rem;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6.7rem;
  }
  .btn {
    color: var(--clr-white);
    background: var(--clr-primary-12);
  }
  .featured {
    margin: 4rem 0;
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
  }
`

export default FeaturedPackages