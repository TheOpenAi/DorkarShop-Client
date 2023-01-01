import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Pages/Loading/Loading';
import { UserContext } from '../context/UserProvider';

const AdminRoutes = ({children}:any) => {
    const userContext = useContext(UserContext)
    const location = useLocation();

    if (userContext?.loading) {
        return <Loading />
    }

    if (userContext?.user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;