import React from 'react'
import { Navigate  } from 'react-router-dom'
import Menu from './Menu'

const Logout  = () => {
   
  console.log('-----',localStorage.getItem('login'))
  localStorage.clear()
  return (
    <div>
        <Menu></Menu>
    <Navigate to='/login' replace={true}></Navigate>
    </div>
  )
}

export default Logout
