import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
  console.log(course);
  const {image, title , info, price, id} = course;
  console.log(course);
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-300 dark:text-black">
	<img src= {image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
  <div className='flex justify-between py-2' >
    <p className=''> <span className='font-semibold'>Fee</span> :{price}$</p>
    <p className=''><span className='font-semibold'>Duration</span> :{info.duration}</p>
  </div>
	<div className="text-start">

		<h2 className="text-2xl font-semibold">{title}</h2>
	</div>
  <Link  to={`/course/${id}`}>
  <button className='btn mt-2 bg-blue-700  w-full py-2  text-white  bg-transparent font-semibold border border-white-600 rounded  hover:bg-white hover:outline-4 hover:outline-neutral-600 hover:text-blue-700 active:translate-y-0'>
    Details
  </button>
  </Link>
</div>
      
    </div>
  );
};

export default CourseCard;