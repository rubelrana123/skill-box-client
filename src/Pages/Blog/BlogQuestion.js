import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const BlogQuestion = ({info}) => {
    const {question , answer } = info;
   const [open , setOpen] = useState(true);
  return (
		<div className='flex align-center justify-center flex-col'>
			<div  onClick={() => setOpen(!open)} className='flex justify-between py-5 px-2 w-auto bg-blue-300 w-full border'>
				<h1><span className='text-red-700'>Question : </span> {question}</h1>
				<div className='h-6 w-6 text-blue-500'>
          {
            open ? <FaPlus/> : <FaMinus/>
          }
				</div>
			</div>
      <div className={open ? 'hidden' : 'block , bg-blue' }>
        <h1 className='text-start p-2 bg-gray-200'> <span className='text-red-600 font-semibold'>Ans :</span> {answer}</h1>
      </div>
		</div>
	);
};

export default BlogQuestion;