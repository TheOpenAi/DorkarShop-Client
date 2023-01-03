import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllUser = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://dorkar-shop-server-siamcse.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, []);
    console.log(users);
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link to={'/home'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            dashboard
                        </Link>
                    </li>
                    <li>

                        all users
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Users</h1>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Make Admin</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user: any, i) => <tr >
                                    <th>{i + 1}</th>
                                    <td><div className="mask mask-squircle w-12 h-12">
                                        <img src="https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg" alt='' />
                                    </div></td>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>



                                    <td  >

                                        <label htmlFor="Confirmation-modal" className=" btn 
                                
                                text-white   bg-gradient-to-r from-primary to-secondary   border-none">Make Admin</label>
                                    </td>




                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    );
};

export default AllUser;

