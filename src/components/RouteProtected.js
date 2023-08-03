import React from 'react';
import { Navigate, Route } from 'react-router-dom';


const RouteProtected = ({ children }) => {
 
  const isLogin = localStorage.getItem('login')
  if (!isLogin){
     return <Navigate to={'/login'}/>
   }else
   {
      return children
   }
  }
   


export default RouteProtected