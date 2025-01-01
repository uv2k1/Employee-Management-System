/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(() => {
    //setLocalStorage()
    getLocalStorage()
  
  }, )
  

  return (
    <>
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
