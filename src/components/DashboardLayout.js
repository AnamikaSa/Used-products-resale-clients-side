import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../components/hooks/useAdmin';
import Navbar from './Navbar';
import useSeller from './hooks/useSeller';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller]= useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {/* <li><Link to="/">Products</Link></li> */}
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/addseller">Buyers</Link></li>
                                <li><Link to="/dashboard">Reported Items</Link></li>
                            </>
                        }

                            {
                                isSeller && <>
                                        <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                               
                                        <li><Link  to="/dashboard/myproduct">My Products</Link></li>
                                    
                                        <li><Link  to="/dashboard/allbuyer">My Buyer</Link></li>
                                    
                                </>
                            }


                            {
                                !isSeller && !isAdmin ?
                                    <>
                                        
                                            <li><Link to="/dashboard">My Order</Link></li>
                                       
                                    </>
                                    :
                                    <></>
                            }


                </ul>

            </div>
        </div>
        </div >
    );
};

export default DashboardLayout;