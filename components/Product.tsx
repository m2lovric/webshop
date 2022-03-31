import React from 'react';

interface ProductProps {
  data: any;
}

const Product = ({ data }: ProductProps) => {
  return (
    <article>
      <img
        src={`https:${data.image[0].fields.file.url}`}
        alt='running sneakers'
        className=' w-[350px] h-[350px]'
      />
      <p className=' font-light text-sm'>{data.title}</p>
      <p className=' font-light text-xs text-slate-500'>{data.tag}</p>
    </article>
  );
};

export default Product;
