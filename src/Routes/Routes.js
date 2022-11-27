import { createBrowserRouter } from "react-router-dom";
import CategoryProducts from "../components/CategoryProducts";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            
            {
                path:'/categories/:id',
                element:<PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    }

])

export default router;