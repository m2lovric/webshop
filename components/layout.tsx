import React from 'react';
import Header from './Header';

interface layoutProps {
  children: React.ReactNode;
}

const Layout = (props: layoutProps) => {
  return (
    <>
      <Header />
      <main className='w-full h-full'>{props.children}</main>
    </>
  );
};

export default Layout;
