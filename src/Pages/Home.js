import React from 'react';
import { Link } from 'react-router-dom';
import svgImg from '../asserts/Webinar-bro.svg'
const Home = () => {

  return (
    <div>
      <section className="bg-gray-300">
	<div className="container flex flex-col justify-center px-16 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={svgImg} alt="" className="object-contain h-[550px]" />
		</div>
		<div className="flex flex-col justify-start p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<p>LEARNERS AND STUDENTS</p>
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Grow
				<span className="dark:text-violet-400">Your</span>Skill
			</h1>
			
			<p className="mt-6 mb-8 text-lg sm:mb-12">You can learn anything.
				<br className="hidden md:inline lg:hidden"/>Build a deep, solid understanding in math, science, and more.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">GET START</Link>
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Learn More</Link>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Home;