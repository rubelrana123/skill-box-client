import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogQuestion from './BlogQuestion';



const Blog = () => {
  const data = useLoaderData();
  console.log(data);
 
  return (
    <div className=' mt-5 p-5 mx-auto'>
  <h1 className='text-blue-700 font-bold text-4xl text-center p-6'>Blog Question</h1>
      {
        data.map( (info) => <BlogQuestion key={info.id} info = {info}></BlogQuestion> )
      }
      
    </div>
  );
};

export default Blog;