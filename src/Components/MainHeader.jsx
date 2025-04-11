import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Layout from './Layout';

export const MainHeader = () => {
  return (
    <>
    <div>
        <Layout />
    </div>   
    <div>
        <Outlet />
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}
