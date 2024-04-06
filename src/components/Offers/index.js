import React from 'react'
import Cookies from 'js-cookie'
import Slider from "react-slick";
import { offersurl } from '../urls'
import useFetch from '../useFetch'
import './index.css'

const Offers = () => {
  const token = Cookies.get("jwt_token")

  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const offersData = useFetch(offersurl, options)

  const { apiStatus, fetchedData } = offersData

  const { offers } = fetchedData

  const renderLoadingView = () => {
    return (
      <div className='loading-container'>
        <span>{""}</span>
      </div>
    )
  }

  const renderSuccessView = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: true,
            adaptiveHeight: true
          }
        }
      ]
    };
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          {offers.map(offer => (
            <img key={offer.id} className='slide-image' src={offer.image_url} alt="offer" />
          ))}
        </Slider>
      </div>
    )
  }



  const renderFailureView = () => { }


  const renderOffers = () => {
    switch (apiStatus) {
      case "INPROGRESS":
        return renderLoadingView()
      case "SUCCESS":
        return renderSuccessView()
      case "FAILURE":
        return renderFailureView()
      default:
        return null
    }
  }

  return <> {renderOffers()} </>

}

export default Offers
