import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/course')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div>
        <div className='flex flex-col'>
          			{categories.map((category) => (

        <Link to={`/course/${category.id}`} key={category} className='py-5 px-4 text-xl bg-transparent text-blue-500 font-semibold border border-white-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'>
      
        	
            {category.name}
         
  
        </Link>
			))}
        </div>
		</div>
	);
};

export default LeftSide;