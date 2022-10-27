 
import React from 'react';
import { FaRegFilePdf, FaStar } from 'react-icons/fa';
import {   Link, useLoaderData } from 'react-router-dom';
 
import Pdf from "react-to-pdf";


 
const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const {title, author, description, info,id, rating,image} = course;

  return (
    <div  ref={ref}  >
    <div className='flex place-content-center py-5'>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
     <div className='flex justify-between bg-gray-500 py-2 px-3'>
         <p className="  text-2xl text-start font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600">{title}</p>
   

        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn text-white  bg-transparent font-semibold  text-2xl border-white-600 rounded border-0' onClick={toPdf}><FaRegFilePdf></FaRegFilePdf></button>}
      </Pdf>

     </div>
    <img className="object-cover w-full h-64" src= {image} alt="Article"/>
        <div  className='flex justify-between text-white px-2 py-2 '>
            <p className='flex gap-1  '> <span className='text-yellow-300 mt-1'> <FaStar></FaStar> </span> {rating.rate}</p>
            <p>Reviews :  {rating.reviws}</p>
            <p>Duration : {info.duration}</p>
          </div>
    <div className="p-2">
        <div>
           
            
            <p className="mt-2 text-sm text-start text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div>

         <Link to={`/checkout/${id}`} >
                  
              <button className="btn mt-2 bg-blue-500  w-full py-2  text-white  bg-transparent font-semibold border border-white-600 rounded  hover:bg-blue-600 text-xl hover:outline-4 hover:outline-neutral-600 hover:text-black-600  active:translate-y-0">Get Premium Access</button>
         </Link>



        </div>

        <div className="mt-4">

            <div className="flex items-center">
                <div>
                   <p className=" text-start  font-semibold text-gray-700 dark:text-gray-200">Mentor</p>
                    <p className=" text-start  font-semibold text-gray-700 dark:text-gray-200">{author.name}</p>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{author.position}</span>


                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
 
  );
};

export default CourseDetails;