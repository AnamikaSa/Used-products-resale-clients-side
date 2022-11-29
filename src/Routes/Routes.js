import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import AllUsers from "../components/AllUsers";
import CategoryProducts from "../components/CategoryProducts";
import Dashboard from "../components/Dashboard";
import DashboardLayout from "../components/DashboardLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import MyBookings from "../components/MyBookings";
import MyProducts from "../components/MyProducts";
import Signup from "../components/Signup";
import Main from "../layouts/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Advertise from '../components/Advertise';
import BookingModal from '../components/BookingModal';
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
                path:'/modal',
                element:<PrivateRoute><BookingModal></BookingModal></PrivateRoute>
            },
            
            {
                path:'/categories/:id',
                element:<PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/advertise',
                element:<Advertise></Advertise>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyBookings></MyBookings>,
            
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>,
                // loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>,
                
            
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            
            },
        ]
    }


])

export default router;