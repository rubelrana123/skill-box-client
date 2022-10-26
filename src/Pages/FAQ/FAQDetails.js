import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQDetails = ({faq}) => {
    const {question , answer } = faq;
   const [open , setOpen] = useState(true);
  return (
		<div className=' flex-col border border-white-100'>
			<div onClick={() => setOpen(!open)} className='flex justify-start  py-5 px-2 w-auto w-full border'>
        <div  className='h-6 w-6 mt-2 text-black'>
          {
            open ? <FaPlus></FaPlus> : <FaMinus></FaMinus>
          }
				</div>
				<h1 className='text-2xl'>{question}</h1>

			</div>
      <div className={open ? 'hidden' : 'block , bg-blue' }>
        <h1 className='text-start p-2 text-xl '>{answer}</h1>
      </div>
		</div>
	);
};

export default FAQDetails;