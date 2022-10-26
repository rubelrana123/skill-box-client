import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
  const [error,setError] = useState('');
  const {createUser, verifyEmail, profileUpdate} = useContext(AuthContext);
  console.log(verifyEmail);
const handleForm = (e) => {
 e.preventDefault();
 const form = e.target;
 const name = form.username.value;
 const email = form.email.value;
 const password = form.password.value;
 const photoURL = form.photoURL.value;
 console.log(email, password, name);
 
 createUser(email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    toast.success('Register SuccessFully',{autoClose : 200});
  
    setError('');
    handleProfileUpdate(name, photoURL)
    form.reset();
     verifyEmail().then(()=> {
    toast.success("Email Verification Send" , {autoClose : 500})
  })

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)

    // ..
  });

}

const handleProfileUpdate = (name , photoURL) => {
  const profile = {
    displayName: name, 
    photoURL:  photoURL,
  }
  profileUpdate(profile);
}

  return (
    <div>
        <div className='p-12 bg-blue-300'>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form  onSubmit={handleForm} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-start">
			<label htmlFor="username" className="block dark:text-black-400">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className=" text-black w-full px-4 py-3 rounded-md " />
		</div>
		<div className="space-y-1 text-start">
			<label htmlFor="phptoURL" className="block dark:text-black-400">PhotoURL</label>
			<input type="text" name="photoURL" id="photoURL" placeholder="photoURL" className=" text-black w-full px-4 py-3 rounded-md " />
		</div>
		<div className="space-y-1 text-start">
			<label htmlFor="email" className="block dark:text-black-400">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className=" text-black w-full px-4 py-3 rounded-md " />
		</div>
		<div className="space-y-1 text-start">
			<label htmlFor="password" className="block dark:text-white">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black" />
			
		</div>
    <div>
      <p className='text-start text-rose-400'>{error}</p>
    </div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Register</button>
	</form>


	<p className="text-xs text-center sm:px-6 dark:text-gray-400">If you have an account?
		<Link to="/login" className="underline dark:text-gray-100">Login</Link>
	</p>
</div>
    </div>
    </div>
  );
};

export default Register;