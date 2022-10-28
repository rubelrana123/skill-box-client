import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="p-6 dark:bg-[#0b275a] dark:text-white]">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 text-blue-400">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Learn</h2>
			<div className="flex flex-col space-y-2 text-sm text-white">
				<Link rel="noopener noreferrer" to="/">Algorithms</Link>
				<Link rel="noopener noreferrer" to="/">Data Structures  </Link>
				<Link rel="noopener noreferrer" to="/">Machine learning    </Link>
				<Link rel="noopener noreferrer" to="/">CS Subjects
  </Link>
				<Link rel="noopener noreferrer" to="/">Video Tutorials</Link>
				<Link rel="noopener noreferrer" to="/">
Courses  </Link>
				<Link rel="noopener noreferrer" to="/">Data science</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Language</h2>
			<div className="flex flex-col space-y-2 text-sm text-white">
				<Link rel="noopener noreferrer" to="/">Javascript</Link>
				<Link rel="noopener noreferrer" to="/">Responsive Python</Link>
				<Link rel="noopener noreferrer" to="/">C</Link>
				<Link rel="noopener noreferrer" to="/">C++</Link>
				<Link rel="noopener noreferrer" to="/">C#</Link>
				<Link rel="noopener noreferrer" to="/">Java  </Link>
				<Link rel="noopener noreferrer" to="/"> SQL </Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Contribute</h2>
			<div className="flex flex-col space-y-2 text-sm text-white">
				<Link rel="noopener noreferrer" to="/">Write an Article
</Link>
				<Link rel="noopener noreferrer" to="/">Improve an Article  </Link>
				<Link rel="noopener noreferrer" to="/">Pick Topics to Write</Link>
				<Link rel="noopener noreferrer" to="/">Write Interview Experience  </Link>
				<Link rel="noopener noreferrer" to="/">
Internships</Link>
				<Link rel="noopener noreferrer" to="/">Video Internship  </Link>
				<Link rel="noopener noreferrer" to="/">Job Placement</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Community</h2>
			<div className="flex flex-col space-y-2 text-sm text-white">
				<Link rel="noopener noreferrer" to="/">GitHub</Link>
				<Link rel="noopener noreferrer" to="/">Discord</Link>
				<Link rel="noopener noreferrer" to="/">Twitter</Link>
				<Link rel="noopener noreferrer" to="/">YouTube</Link>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="dark:text-gray-400">© Copyright 2022. All Rights Reserved.</span>
	</div>
</footer>
    </div>
  );
};

export default Footer;