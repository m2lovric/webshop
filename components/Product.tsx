import React from 'react';

interface ProductProps {
  data: any;
}

const Product = ({ data }: ProductProps) => {
  return (
    <article className=' mr-10 w-[350px] 2xl:w-[450px]'>
      <img
        src={`https:${data.image[0].fields.file.url}`}
        alt='running sneakers'
        className=' w-[350px] h-[350px] 2xl:w-[450px] 2xl:h-[450px] box-border'
      />
      <p className=' font-light text-sm'>{data.title}</p>
      <p className=' font-light text-xs text-slate-500'>{data.tag}</p>
    </article>
  );
};

export default Product;
