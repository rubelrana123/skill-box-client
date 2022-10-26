import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";

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
       {path : '/courses', element : <Courses></Courses>},
       {path : '/faq', element : <FAQ></FAQ>}
  ]}
])