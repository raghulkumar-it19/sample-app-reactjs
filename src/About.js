import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className='About'>
      <h2>About...</h2>
      <p style={{margin: "1rem"}}>Hi, I am Raghulkumar. Together lets make education free for everyone...</p>
      <footer>
        <Link to='/'>Visit Our Homepage</Link>
      </footer>
    </main>
  )
}

export default About