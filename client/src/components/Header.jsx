import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='bg-cyan-100'>
    <nav className='flex justify-between  h-10 items-center font-medium mx-7'>
        <div>Auth App</div>
        <div className='flex list-none gap-x-5'>
            <NavLink to='/' className={({isActive}) => isActive ? 'underline':undefined} >Home</NavLink>
            <NavLink to='/about'className={({isActive}) => isActive ? 'underline':undefined}>About</NavLink>
            <NavLink to='/sign-in'className={({isActive}) => isActive ? 'underline':undefined}>Sign in</NavLink>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Header