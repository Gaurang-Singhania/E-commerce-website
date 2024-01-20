import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Offers On E-mail!</h1>
      <p>Subscribe to NewsLetter To Stay Updated!!</p>
      <div>
        <input type='email' placeholder='Your E-mail Id'></input>
        <button>Subscribe Here</button>
      </div>
    </div>
  )
}

export default NewsLetter
