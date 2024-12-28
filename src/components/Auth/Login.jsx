import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email , setEmail ] = useState("")
  const [password, setPassword] = useState("")
    const submitHandler=(e)=>{
         e.preventDefault();
              
          handleLogin(email, password)
               setEmail("")
               setPassword("")
    }
    
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
       <form onSubmit={submitHandler} 
       
       className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-green-400 dark:border-green-800">
      <div className="px-8 py-10 md:px-20">
        <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
          Log In 
        </h2>
        
        <div className="mt-10">
          <div className="relative">
            <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} required placeholder="you@example.com" className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-green-500 dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400" name="email" id="email" type="email" />
          </div>
          <div className="mt-6">
            <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>{
                        setPassword(e.target.value);
            }} required placeholder="••••••••" className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-green-500 dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400" name="password" id="password" type="password" />
          </div>
          <div className="mt-10">
            <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg hover:from-green-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-green-400 dark:focus:ring-green-800" type="submit">
              Log in
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
        {/* <div className="text-sm text-green-900 dark:text-green-300 text-center">
          Don't have an account?
          <a className="font-medium underline" href="#">Sign up</a>
        </div> */}
      </div>
    </form>
    </div>
  )
}

export default Login
