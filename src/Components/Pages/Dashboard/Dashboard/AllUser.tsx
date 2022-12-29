import React, { useState, useEffect } from 'react';

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
                                users.map((user:any,i) => <tr >
                                    <th>{i+1}</th>
                                    <td><div className="mask mask-squircle w-12 h-12">
                                        <img src="" alt="Avatar Tailwind CSS Component" />
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

