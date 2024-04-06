import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to="/" className="link">
        <div className='footer-logo-container'>
          <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1703228793/Frame_275_prt51x.png"
            alt="website logo"
            className='footer-logo'
          />
          <span className='footer-logo-text'>Tasty Kitchens</span>
        </div>
      </Link>
      <div className='footer-description-container'>
        <p className='description'>The only thing we are serious about is food. Contact us on</p>
      </div>
      <div className='social-container'>
        <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className='link'>
          <FaInstagram className='social-icons'
            style={{ color: "#fff", width: "30px", height: "30px", marginRight: "20px" }} />
        </a>
        <a href="https://twitter.com/home" rel="noreferrer" target="_blank" className='link'>
          <FaTwitter className='social-icons'
            style={{ color: "#fff", width: "30px", height: "30px", marginRight: "20px" }} />
        </a>
        <a href="https://www.facebook.com/home" rel="noreferrer" target="_blank" className='link'>
          <FaSquareFacebook className='social-icons'
            style={{ color: "#fff", width: "30px", height: "30px", marginRight: "20px" }} />
        </a>
      </div>
    </div>
  )
}

export default Footer
