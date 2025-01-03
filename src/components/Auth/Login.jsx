/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'

const Login = ({handleLogin}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
const submitHandler = (e) =>{
   e.preventDefault()
   handleLogin(email,password)
   console.log("email is",email)
   console.log("email is",password)

   setemail('')
   setpassword('')
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-2 text-xl px-6 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input 
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 mt-3 border-emerald-600 rounded-full py-2 text-xl px-6 placeholder:text-gray-400 type="password" ' placeholder='Enter your password' />
          <button className=' mt-7 text-white outline-none bg-transparent w-full hover:bg-emerald-800 border-none bg-emerald-600 rounded-full py-2 text-xl px-6 placeholder:text-white'>Login</button>
        </form>
      </div>
        
    </div>
  )
}

export default Login