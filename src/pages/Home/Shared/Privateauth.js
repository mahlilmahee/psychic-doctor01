import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from './Loader';

const Privateauth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    if(loading) {
        <Loader></Loader>
    }
    const location=useLocation()
    if(!user){
        <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children;
};

export default Privateauth;