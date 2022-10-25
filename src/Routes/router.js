import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter ([
  { path : "/", element: <Main></Main>, errorElement: <ErrorPage/> ,children : [
       {path : '/', element : <Home></Home>},
       {path : '/blog', element : <Blog></Blog>}
  ]}
])