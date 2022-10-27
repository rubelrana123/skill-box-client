import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from './LeftSide';


const Courses = () => {
  return (
    <div className=''>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-4">

    <div className="border w-full selection:">
      
      <LeftSide></LeftSide>
    </div>
    <div  className="col-span-3  ">
      <Outlet></Outlet>
    </div>
</div>
    </div>
  );
};

export default Courses;