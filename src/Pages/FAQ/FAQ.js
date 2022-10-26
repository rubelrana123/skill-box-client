import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FAQDetails from './FAQDetails';

const FAQ = () => {
  const faqdata = useLoaderData();
  console.log(faqdata);
  return (
    <div className='bg-blue-200'>
     <h1 className='text-4xl  text-blue-600 py-6'>Frequently Asked Questions about Soft Skills</h1>

<div className='p-12'>
       {
      faqdata.map(faq => <FAQDetails faq ={faq} key={faq.id}></FAQDetails> )
     }
</div>
    </div>
  );
};

export default FAQ;