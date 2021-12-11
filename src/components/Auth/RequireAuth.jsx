import * as React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({ children }) => {
    const { token } = useAuth()
    return token ? children : <Navigate to="/access" />;
}


export default RequireAuth