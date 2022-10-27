import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import logo from '../asserts/logo1.png'
import { AuthContext } from '../contexts/UserContext';
import { FaUserSecret } from "react-icons/fa";
const Header = () => {
	const {signout, user} = useContext(AuthContext);
	
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  
	const handleLogout = () =>{
		signout().then(() => {
      toast.success(" Sign-out successful")
}).catch((error) => {
     
    const errorMessage = error.message;
   console.log(errorMessage);
});
	}

	return (
		<div className='bg-[#FFF3] shadow-md'>
			<div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ' >
				<div className='relative flex items-center justify-between'>
					<NavLink
						to='/'
						
						title='Skill Box'
						className='inline-flex items-center'
					>
						<img src={logo}  className= "h-10" alt="" />
						<span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
							Skill Box
						</span>
					</NavLink>
					<ul className='flex items-center hidden space-x-8 lg:flex'>
						<li>
							<NavLink
								to='/'
								aria-label='Home'
								title='Home'
                className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/courses'
								aria-label='Course'
								title='Course'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								Courses
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/faq'
								aria-label='FAQ'
								title='FAQ'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								FAQ
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/blog'
								aria-label='Blog'
								title='Blog'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								Blog
							</NavLink>
						</li>
						{user?.uid ?
						 <>
						 						<li onClick={handleLogout} className='font-semibold text-xl cursor-pointer  tracking-wide text-black   p-2 rounded-md transition-colors duration-200 hover:text-deep-purple-accent-400, outline-none'>
							Logout
						</li>
						
						</> : 
						<>
						<li>
							<NavLink
								to='/login'
								aria-label='Login'
								title='Login'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								Login
							</NavLink>
						</li>
						</>
						}
						

					<div>
				<span  className="group relative">
      <span
			
			className =  {` ${user?.displayName && `pointer-events-none absolute -bottom-10 right-1/2 -translate-x-1/2  bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent group-hover:opacity-100`}`}
			
			
	>
       {user?.displayName ? <p>{user.displayName} </p>  : <FaUserSecret></FaUserSecret> }
      </span>
            <>
			       { user?.photoURL ?
					  <img className='rounded-[50%] h-10' src={user?.photoURL} alt="userPhoto"/>  : " " }
			 </>
    </span>
					</div>
					</ul>
					<div className='lg:hidden'>
						<button
							aria-label='Open Menu'
							title='Open Menu'
							className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
								/>
								<path
									fill='currentColor'
									d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
								/>
								<path
									fill='currentColor'
									d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className='z-10 absolute top-0 left-0 w-full'>
								<div className='p-5 bg-white border rounded shadow-sm'>
									<div className='flex items-center justify-between mb-4'>
										<div>
											<NavLink
												to='/'
												aria-label='Skill'
												title='Skill'
												className='inline-flex items-center'
											>
												<img src={logo} className="h-10" alt="" />
												
												<span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
													Skill Box
												</span>
											</NavLink>
										</div>
										<div>
											<button
												aria-label='Close Menu'
												title='Close Menu'
												className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
													<path
														fill='currentColor'
														d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className='space-y-4'>
											<li>
												<NavLink
													to='/'
													aria-label='Home'
													title='Home'
													className={({ isActive }) =>
														isActive
															? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
															: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
													}
												>
													Home
												</NavLink>
											</li>
											
											<li>
												<NavLink
													to='/courses'
													aria-label='Courses'
													title='Courses'
													className={({ isActive }) =>
														isActive
															? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
															: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
													}
												>
													Courses
												</NavLink>
											</li>
																<li>
							<NavLink
								to='/faq'
								aria-label='FAQ'
								title='FAQ'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								FAQ
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/blog'
								aria-label='Blog'
								title='Blog'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								Blog
							</NavLink>
						</li>
						{user?.uid ?
						 <>
						 						<li onClick={handleLogout} className='font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
							Logout
						</li>
						
						</> : 
						<>
						<li>
							<NavLink
								to='/login'
								aria-label='Login'
								title='Login'
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
										: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
								}
							>
								Login
							</NavLink>
						</li>
						</>
						}
						

					<div className='flex justify-center'>
				<span  className="group relative">
      <span
			
			className =  {` ${user?.displayName && `pointer-events-none absolute -top-10 right-1/2 -translate-x-1/2  bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent group-hover:opacity-100`}`}
			
			
	>
      {user?.displayName ? <p>{user.displayName} </p>  : <FaUserSecret></FaUserSecret> }
      </span>
       <>
			       { user?.photoURL ?
					  <img className='rounded-[50%] h-10' src={user?.photoURL} alt="userPhoto"/>  : <FaUserSecret className='h-8'></FaUserSecret> }
			 </>
    </span>
					
									</div>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
