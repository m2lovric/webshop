import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-10/12 h-20 '>
      <Link href='/'>
        <a className='w-2/12'>
          <Image
            src='/icon-adidas-logo.svg'
            alt='logo'
            width='60px'
            height='60px'
          />
        </a>
      </Link>

      <section className='flex justify-between w-4/12 uppercase'>
        <Link href='/'>
          <a className='font-semibold'>Men</a>
        </Link>
        <Link href='/'>
          <a className='font-semibold'>Women</a>
        </Link>
        <Link href='/'>
          <a className='font-semibold'>Kids</a>
        </Link>
        <Link href='/'>
          <a className='font-extralight'>Sale</a>
        </Link>
        <Link href='/'>
          <a className='font-extralight'>3 Stripe Life</a>
        </Link>
      </section>
      <section className='flex items-center justify-between w-3/12'>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search'
          className='w-8/12 bg-slate-200 font-extralight text-black px-2 mr-6 '
        />
        <Link href='/'>
          <a className='w-2/12'>
            <Image src='/user.png' alt='logo' width='20px' height='20px' />
          </a>
        </Link>
        <Link href='/'>
          <a className='w-2/12'>
            <Image src='/love.png' alt='logo' width='20px' height='20px' />
          </a>
        </Link>
        <Link href='/'>
          <a className='w-2/12'>
            <Image src='/bag.png' alt='logo' width='20px' height='20px' />
          </a>
        </Link>
      </section>
    </header>
  );
};

export default Header;
