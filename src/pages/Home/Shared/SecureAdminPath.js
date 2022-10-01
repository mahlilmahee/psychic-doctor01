import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loader from './Loader';

const SecureAdminPath = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLoading]=useAdmin(user)
    const location=useLocation()
    if(loading ||adminLoading) {
       return <Loader></Loader>
    }
    // const location=useLocation()
    if(!user ||!admin){
       return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children;
};

export default SecureAdminPath;