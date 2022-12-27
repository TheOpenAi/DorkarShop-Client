import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../../Header/Header';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Header></Header>

                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content  ">
                        <Outlet></Outlet>



                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content  ">
                            <div className='flex mb-4'>
                                <div>
                                    <img className='h-14 w-20' src='https://i.ibb.co/0FQ1X8x/icons8-dashboard-layout-48.png' alt='' />
                                </div>

                                <div>
                                    <h1 className='my-4 font-bold font-3xl text-blue-900'>Dashboard</h1>
                                </div>
                            </div>

                            <div className=''>


                                <li><Link to='/dashboard/addProduct' >Add Product</Link></li>

                                <li><Link to='/dashboard/myProduct' >My Product</Link></li>

                                <li><Link to='/dashboard/myorder' >My Orders</Link></li>

                                <li><Link to='/dashboard/allusers' >All Users</Link></li>

                                <li><Link to='/dashboard/allSeller' >All Sellers</Link></li>

                                <li><Link to='/dashboard/allBuyers' >All Buyers</Link></li>





















                            </div>



                        </ul>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;