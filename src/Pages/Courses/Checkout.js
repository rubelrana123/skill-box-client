import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Checkout = () => {
  const {user} = useContext(AuthContext);
  const {title, image, price} = useLoaderData();
  const navigate = useNavigate()
  const handleCheckout = () =>{
  navigate("/")
    toast.success("Thanks for Your Enrolled Course", {autoClose : 700})
  }
   
  return (
    <div>
       <div className="rounded-md p-14">
                <form >
                    <section>
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2"> {title} Checkout Information</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Name</span>
                                <input name="name" readOnly  defaultValue={user.displayName} className="focus:outline-none px-3" placeholder="Try Odinsson" required=""/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Email</span>
                                <input readOnly defaultValue={user.email} name="email" type="email" className="focus:outline-none px-3" placeholder="type email" required=""/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Course</span>
                                <input readOnly defaultValue={title} name="email" type="text" className="focus:outline-none px-3" placeholder="type title" required=""/>
                            </label>

                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Address</span>
                                <input   name="address" type="text" className="focus:outline-none px-3" required=""/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Phone Number</span>
                                <input   name="text" type="text" className="focus:outline-none px-3" placeholder="type your phone number" required=""/>
                            </label>


                        </fieldset>

                                 <button onClick={handleCheckout} >
                  
              <button className="btn  mt-2 bg-blue-500  w-full px-12 py-3 text-white">Enroll Course</button>
         </button>
                    </section>
                </form>
            </div>
    </div>
  );
};

export default Checkout;