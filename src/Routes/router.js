import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import AllCourse from "../Pages/Courses/AllCourse";
import CourseDetails from "../Pages/Courses/CourseDetails";

import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter ([
  { path : "/", element: <Main></Main>, errorElement: <ErrorPage/> ,children : [
       {path : '/', element : <Home></Home>},
       {path : '/blog', element : <Blog></Blog>,
       loader : () => fetch('http://localhost:5000/blog') 
      },
       {path : '/login', element : <Login></Login>},
       {path : '/register', element : <Register></Register>},
       {path : '/course', element : <Courses></Courses> , children : [
        {path : "/course", element : <AllCourse></AllCourse>, loader : ()=> fetch("http://localhost:5000/courses")},
        {path: "/course/:id" , element : <CourseDetails></CourseDetails>, loader : ({params}) => fetch(`http://localhost:5000/course/${params.id}`)}
       ]},
       {path : '/faq', element : <FAQ></FAQ>,
      
      loader : () => fetch("http://localhost:5000/faq")}
  ]}
])