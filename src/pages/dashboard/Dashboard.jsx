import React, { useEffect } from 'react'
import { useUserQuery } from '../../store/services/HomeService'
import { useDispatch } from 'react-redux'
import { setLocalStorage } from '../../utils/LocalstorageUtils'
import { setUser } from '../../store/slice/AuthSlice';
import Home from '../home/Home'


const Dashboard = () => {
  const {data:user} = useUserQuery()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setUser(user))
  })

  return (
    <>
      <Home/>
    </>
  )
}

export default Dashboard