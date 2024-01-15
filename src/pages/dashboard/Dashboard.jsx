import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocalStorage } from '../../utils/LocalstorageUtils'
import { setUser } from '../../store/slice/AuthSlice';
import Home from '../home/Home'


const Dashboard = () => {

  return (
    <>
      <Home/>
    </>
  )
}

export default Dashboard