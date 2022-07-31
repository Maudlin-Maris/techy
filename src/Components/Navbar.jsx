import React from 'react'
import { Link } from 'react-router-dom'
import Tech from './Images/tech.jpg'

function Navbar() {
  return (
    <div>
        <div className='tech   flex justify-between pt-8 px-12 pb-12 p-32'>
          <div>
              <img src={Tech} alt=""  className='w-32 h-8 '/>
          </div>
          <div className='flex gap-4 '>
            <Link to={'/Login'}>Login</Link>
            <Link to={'/Register'}>Register</Link>
            <Link to={'/Dashboard'}>Dashboard</Link>

          </div>
        </div>
    </div>
  )
}

export default Navbar