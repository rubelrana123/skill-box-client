import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const AllCourse = () => {
  const allCourse = useLoaderData();
  console.log(allCourse);
  return (
    <div className='grid lg:grid-cols-3 place-content-center content-center  place-items-center  md:grid-cols-2 grid-cols-1 mx-auto  w-full lg:mx-0 px-8 lg:py-5 gap-4'>
     {allCourse.map(course => <CourseCard key={course.id} course={course} ></CourseCard>)}
    </div>
  );
};

export default AllCourse;