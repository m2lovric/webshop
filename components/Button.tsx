import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className='bg-black border-none uppercase flex justify-between items-center
    font-semibold text-white my-2 px-6 py-3 w-max '
    >
      {text}
      <span className=' ml-4 w-10 h-10'>
        <Image
          src='/icons8-right-60.png'
          alt='arrow'
          width='40px'
          height='40px'
        />
      </span>
    </button>
  );
};

export default Button;
