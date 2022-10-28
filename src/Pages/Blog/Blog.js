import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import BlogQuestion from './BlogQuestion';



const Blog = () => {
  const data = useLoaderData();
   const {darkMode} = useContext(AuthContext);
  // console.log(data);
 
  return (
    <div className= {`  pt-5 p-5 mx-auto ${darkMode ? "bg-gray-400 shadow-lg" : "bg-gray-100"}`}>
  <h1 className='text-blue-700 font-bold text-4xl text-center p-6'>Blog Question</h1>
      {
        data.map( (info) => <BlogQuestion key={info.id} info = {info}></BlogQuestion> )
      }
      
    </div>
  );
};

export default Blog;