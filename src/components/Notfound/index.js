import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Notfound = () => {
  const navigate = useNavigate()

  const handdleNotfound = () => {
    navigate("/")
  }


  return (
    <div className='notfound-container'>
      <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1692777377/erroring_1_tygjpg.png"
        alt="notfound"
        className='notfound-image' />
      <h2 className='notfound-headng'>Page Not Found</h2>
      <p className='notfound-description'>We are sorry, the page you requested could not be found. Please go back to the homepage</p>
      <div className='button-container'>
        <button type="button" className='home-page-button' onClick={handdleNotfound}>
          Home page
        </button>
      </div>
    </div>
  )
}

export default Notfound
