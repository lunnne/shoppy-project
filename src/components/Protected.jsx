import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export function Protected({ children }) {
  const { user } = UserAuth();
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export function AdminProtected({children}){
  const { user } = UserAuth();
  if( !user || user.admin !== true) {
    return  <Navigate to="/" />;
  }
  return children;
}