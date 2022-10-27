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
    toast.success("Thanks for Your Enrolled Course", {autoClose : 400})
  }
   
  return (
    <div>
       <div class="rounded-md p-14">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Checkout Information</h2>
                        <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Name</span>
                                <input name="name" readOnly  defaultValue={user.displayName} class="focus:outline-none px-3" placeholder="Try Odinsson" required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Email</span>
                                <input readOnly defaultValue={user.email} name="email" type="email" class="focus:outline-none px-3" placeholder="type email" required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Course</span>
                                <input readOnly defaultValue={title} name="email" type="text" class="focus:outline-none px-3" placeholder="type title" required=""/>
                            </label>

                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Address</span>
                                <input   name="address" type="text" class="focus:outline-none px-3" required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Phone Number</span>
                                <input   name="text" type="text" class="focus:outline-none px-3" placeholder="type your phone number" required=""/>
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