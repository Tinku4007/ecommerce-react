import React from 'react'
import { getLocalStorage } from '../utils/LocalstorageUtils'
import { Navigate, Outlet } from 'react-router-dom'

const AuthProtection = () => {
  const auth = getLocalStorage('accessToken')
  return (
    auth ? <Navigate to='/admin/dashboard' />  :    <Outlet />
  )
}

export default AuthProtection