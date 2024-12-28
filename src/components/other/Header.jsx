import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  
  const logOutUser=()=>{
         localStorage.setItem('loggedInUser', '')
         props.changeUser('')
  }

  return (
    <div className=' flex items-end  justify-between text-white'>
      <h1 className='text-white text-2xl font-medium  '>heloo <br /><span className='text-3xl font-semibold '>{ props.data ? props.data.firstName: "Admin"} 🖐️</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium hover:from-red-800 hover:to-cyan-700  text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
