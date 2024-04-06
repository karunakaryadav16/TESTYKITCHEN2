/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const apiConstraints = {
  initial: "INITIAL",
  in_progress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const useFetch = (url, options, offset, limit, rating) => {
  const [apiStatus, setApiStatus] = useState(apiConstraints.initial)
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    const getData = async () => {
      setApiStatus(apiConstraints.in_progress)
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        setApiStatus(apiConstraints.success)
        setFetchedData(data)
      } else {
        setApiStatus(apiConstraints.failure)
      }
    }
    getData()

  }, [offset, limit, rating])

  return { apiStatus, fetchedData }

}

export default useFetch
