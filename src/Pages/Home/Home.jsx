import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
     <Link to = "/login">
     
     <button className='home-btn'>Signup here</button>
     </Link>
      
    </div>
  )
}

export default Home
