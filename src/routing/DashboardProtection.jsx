import React from 'react'
import { getLocalStorage } from '../utils/LocalstorageUtils'
import { Navigate, Outlet } from 'react-router-dom'

const DashboardProtection = () => {
    const auth = getLocalStorage('accessToken')
    return (
        auth ? <Outlet /> :  <Navigate to='/auth/home' />
    )
}

export default DashboardProtection