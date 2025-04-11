import React from 'react'
import { Layout } from './Layout';

export const Navbar = () => {
  return (
    <>
    <div  className='fixed-top'>
    <div className='row bg-light'>
      <div className="col-md-6">
        <h1>logo</h1>
      </div>

      <div className='col-md-6'>
        <div className='row'>
          <div className='col-md-12 mt-2'>
            <div className='float-end'>
              <span>contact@factorymanagement.com</span>
              <span>Call Us Now: 9999999999 / 9999999999</span>
            </div>
          </div>

          <div className='col-md-12'>
            <Layout />
          </div>  
        </div>
      </div>
    </div>   
    </div>  
    </>
  )
}

export default Navbar;  