import React from 'react'
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context';

const RequireAuth = ({children}) => {
    const {isAuth, isLoading} = useContext(AuthContext)
    const location = useLocation();

    if (!isAuth && !isLoading) {
        return <Navigate to="/login" replace state={{ from: location }} />
    } else {
        return children;
    }
    
}

export default RequireAuth