import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import AllCourse from "../Pages/Courses/AllCourse";
import Checkout from "../Pages/Courses/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails";

import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRouter";

export const router = createBrowserRouter ([
  { path : "/", element: <Main></Main>, errorElement: <ErrorPage/> ,children : [
       {path : '/', element : <Home></Home>},
       {path : '/blog', element : <Blog></Blog>,
       loader : () => fetch('https://skill-box-server-rubelrana123.vercel.app/blog') 
      },
       {path : '/login', element : <Login></Login>},
       {path : '/register', element : <Register></Register>},

     {path: "/course/:id" , element : <CourseDetails></CourseDetails>, loader : ({params}) => fetch(`https://skill-box-server-rubelrana123.vercel.app/course/${params.id}`)},

       {path: "/checkout/:id" , element : <PrivateRoute><Checkout></Checkout></PrivateRoute> , loader : ({params}) => fetch(`https://skill-box-server-rubelrana123.vercel.app/course/${params.id}`)},


       {path : '/courses', element : <Courses></Courses> , children : [

        {path : "/courses", element : <AllCourse></AllCourse>, loader : ()=> fetch("https://skill-box-server-rubelrana123.vercel.app/courses")}]},
       {path : '/faq', element : <FAQ></FAQ>,
      
      loader : () => fetch("https://skill-box-server-rubelrana123.vercel.app/faq")}
  ]},


 
])