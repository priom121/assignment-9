import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Error/Error";
import Home from "../Pages/Home";
import Pages from "../Pages/pages";
import Blog from "../Pages/Blog";
import Login from "../From/Login";
import Register from "../From/Register";

const router = createBrowserRouter([
       {
         path:'/',
         element:<MainLayOut></MainLayOut>,
         errorElement:<Error></Error>,
         children:[
                   {
                       path:'/',
                       element:<Home></Home>,
                       loader:()=> fetch('/blog.json')
                   },
                   {
                    path:'/pages',
                    element:<Pages></Pages>
                   } ,
                   {
                    path:'/blog',
                    element:<Blog></Blog>
                   } ,
                   {
                    path:'/login',
                    element:<Login></Login>
                   },
                   {
                    path:'/register',
                    element:<Register></Register>
                   }       
         ]
       }                       
])
export default router;