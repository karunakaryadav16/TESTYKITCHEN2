import React, { } from 'react'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { FaStar } from 'react-icons/fa'
import Header from '../Header'
import Footer from '../Footer'
import useFetch from '../useFetch'
import { restaaurantDetailsUrl } from '../urls'
import FoodItemList from '../FoodItemList'
// import CartContext from '../../context/CartContext'
import './index.css'


const RestaurantDetails = () => {
  // const { quantity, setQuantity } = useContext(CartContext)
  const { id } = useParams()
  const token = Cookies.get("jwt_token")
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const restaurantDetails = useFetch(restaaurantDetailsUrl + id, options)

  const { apiStatus, fetchedData } = restaurantDetails


  const renderLoadingView = () => {
    return (
      <div className='loading-container'>
        <ThreeDots height={50} width={50} color="#F7931E" />
      </div>
    )
  }

  // const increaseItem = (id) => {
  //   fetchedData.food_items.filter(each => {
  //     if (each.id === id) {
  //       if (quantity >= 1) {
  //         setQuantity(quantity + 1)
  //       }
  //     }
  //   });
  // }

  // const decreaseItem = (id) => {
  //   fetchedData.food_items.filter(each => {
  //     if (each.id === id) {
  //       if (quantity > 1) {
  //         setQuantity(quantity - 1)
  //       }
  //     }
  //   });

  // }

  const renderSuccessView = () => (
    <>
      <div className='restaurant-detail-container'>
        <div className='specific-restaurant-container'>
          <img className='specific-restaurant-image' src={fetchedData.image_url} alt={fetchedData.name} />
          <div className='specific-restaurant-details'>
            <span className='specific-restaurant-name'>{fetchedData.name}</span>
            <span className='specific-restaurant-cuisine'>{fetchedData.cuisine}</span>
            <span className='specific-restaurant-location'>{fetchedData.location}</span>
            <div className='specific-restaurant-rating-and-price-container'>
              <div className='specific-restaurant-rating-container'>
                <div>
                  <FaStar style={{ color: "#fff", height: "12px", width: "12px", marginRight: "3px" }} />
                  <span className='specific-restaurant-rating'>{fetchedData.rating}</span>
                </div>
                <span className='specific-restaurant-rating-count'>{fetchedData.reviews_count}+ Ratings</span>
              </div>
              <div className='specific-restaurant-cost-container'>
                <span className='specific-restaurant-rating'>Rs. {fetchedData.cost_for_two}</span>
                <span className='specific-restaurant-rating-count'>Cost for two</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='restaurant-food-items-list-container'>
        {fetchedData.food_items.map(foodItem => (
          <FoodItemList
            key={foodItem.id}
            foodItem={foodItem}
          />
        ))}
      </div>
    </>
  )

  const renderFailureView = () => { }


  const renderSpecificRestaurantDetails = () => {
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


  return (
    <>
      <Header />
      <div className='specific-restaurant-details-container'>
        {renderSpecificRestaurantDetails()}
      </div>
      <Footer />
    </>


  )
}

export default RestaurantDetails
