/* eslint-disable no-unused-vars */
import React, { useEffect ,useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  // useEffect(() => {
  //   //setLocalStorage()
  //   getLocalStorage()
  
  // }, )
  
  const [user, setUser] = useState(null)

  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    }else{
      alert('Invalid Credencials')
    }
      
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
