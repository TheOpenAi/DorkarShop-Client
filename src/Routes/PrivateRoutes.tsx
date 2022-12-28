import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const PrivateRoutes = ({ children }: any) => {
    const userContext = useContext(UserContext)
    const location = useLocation();

    if (userContext?.loading) {
        return <div>
            Loading......
        </div>
    }

    if (userContext?.user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;