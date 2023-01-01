import React, { useContext } from 'react';
import UserProvider, { UserContext } from '../../../../context/UserProvider';

const UserDashboard = () => {
    const user = useContext(UserContext)
    return (
        <div className='w-[70%] mx-auto'>
            <>
                <h1 className='text-2xl ml-[-50px]'> Welcome to Dashboard {user?.user?.name}</h1>
            </>
            {
                user?.user?.role === 'Seller' && <>
                    <h1 className='text-2xl text-primary'> 

                    Dear Seller you can add your product from add Product and see your product from my product
                    </h1>
                </>
              
            }
            {
                user?.user?.role === 'Buyer' && <> 
                    <h1 className='text-2xl text-primary'> 
                        Dear Buyer Thanks for being with us. You can see your order from my order
                    </h1>
                </>
            }
             
        </div>
    );
};

export default UserDashboard;