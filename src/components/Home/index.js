import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { BsFilterLeft } from "react-icons/bs";
import { ThreeDots } from 'react-loader-spinner'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Header from '../Header'
import Footer from '../Footer'
import Offers from '../Offers'
import useFetch from '../useFetch'
import RestaurantsList from '../RestaurantsList'
import SearchResults from '../SearchResults';
import './index.css'


const limit = 9

const sortByOptions = [
  {
    id: 0,
    displayText: 'Sort by Highest',
    value: 'Highest',
  },
  {
    id: 1,
    displayText: 'Sort by Lowest',
    value: 'Lowest',
  },
]

const apiConstraints = {
  initial: "INITIAL",
  in_progress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const Home = () => {
  const [activePage, setActivePage] = useState(1)
  const [search, setSearch] = useState(false)
  const [apiData, setApiData] = useState([])
  const [searchStatus, setSearchStatus] = useState(apiConstraints.initial)
  const [searchInput, setSearchInput] = useState("")
  const [rating, setRating] = useState(sortByOptions[0].value)
  const offset = (activePage - 1) * limit


  const searchHanddler = e => {
    setSearchInput((e.target.value).toLowerCase())
  }

  const onRatingFilter = e => {
    setRating(e.target.value)
  }

  const handdleLeftArrow = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1)
    }
  }

  const handdleRightArrow = () => {
    if (activePage < 4) {
      setActivePage(activePage + 1)
    }
  }

  const token = Cookies.get("jwt_token")
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const restaurantList = useFetch(`https://apis.ccbp.in/restaurants-list?&offset=${offset}&limit=${limit}&sort_by_rating=${rating}`, options, rating, limit, offset)

  const { apiStatus, fetchedData } = restaurantList

  const { restaurants } = fetchedData

  const getSearchResults = async () => {
    setSearchStatus(apiConstraints.in_progress)
    const response = await fetch(`https://apis.ccbp.in/restaurants-list?search=${searchInput}`, options)
    const data = await response.json()
    if (response.ok === true) {
      setSearchStatus(apiConstraints.success)
      setApiData(data)
    } else {
      setSearchStatus(apiConstraints.failure)
    }
  }

  const handdleSearchRestaurant = () => {
    setSearch(!search)
    getSearchResults()
    setSearchInput("")
  }

  const renderLoadingView = () => {
    return (
      <div className='loading-container'>
        <ThreeDots height={50} width={50} color="#F7931E" />
      </div>
    )
  }

  const renderSuccessView = () => (
    <div className='restaurants-container'>
      <div className='heading-and-search-container'>
        <span className='heading'>Popular Restaurants</span>
        {/* <div className='search-container'>
          <input type="search"
            className='search-input'
            placeholder='Search restaurant'
            onChange={searchHanddler}
            value={searchInput}
          />
          <div className='search-button' onClick={handdleSearchRestaurant}>
            <CiSearch />
          </div>
        </div> */}
      </div>
      <div className='heading-container'>
        <span className='description-home'>Select Your favourite restaurant special dish and make your day happy...</span>
        <div className='filter'>
          <BsFilterLeft style={{ color: "#475569", height: "20px", width: "20px" }} />
          <select value={rating} onChange={onRatingFilter} className="dropdown">
            {sortByOptions.map(eachOption => (
              <option value={eachOption.value} key={eachOption.id}>
                {eachOption.displayText}
              </option>
            ))}
          </select>
          {/* <div className='search-container-mobile'>
            <input type="search"
              className='search-input'
              placeholder='Search restaurant'
              onChange={searchHanddler}
              value={searchInput}
            />
            <div className='search-button-mobile' onClick={handdleSearchRestaurant}>
              <CiSearch />
            </div>
          </div> */}
        </div>
      </div>
      <hr />
      <div className='restaurants-list-container'>
        {search ? <>
          {searchStatus === "INPROGRESS" ? <div className='loading-container'>
            <ThreeDots height={50} width={50} color="#F7931E" />
          </div>
            :
            <>
              {
                apiData.restaurants.map(restaurant => (
                  <SearchResults restaurant={restaurant} key={restaurant.id} />
                ))
              }
            </>
          }
        </>
          :
          <>
            {
              restaurants.map(restaurant => (
                <RestaurantsList restaurant={restaurant} key={restaurant.id} />
              ))
            }
          </>
        }
      </div>
      {
        searchInput.length === 0 &&
        <div className='pagenation-container'>
          <div className='container'>
            <div className='arrow-button' onClick={handdleLeftArrow}>
              <FaAngleLeft />
            </div>
            <span className='page-count'>0{activePage} of 04</span>
            <div className='arrow-button' onClick={handdleRightArrow}>
              <FaAngleRight />
            </div>
          </div>
        </div>
      }
    </div >
  )

  const renderFailureView = () => { }

  const renderRestaurantsList = () => {
    switch (apiStatus || searchStatus) {
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
      <div className='home-container'>
        <Offers />
        {renderRestaurantsList()}
      </div>
      <Footer />
    </>

  )
}

export default Home
