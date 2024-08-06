import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const AverageRating = () => {

  const {feedbacks} = useContext(FeedbackContext)

  const avrgRating = feedbacks.reduce((p,c) => p+c.rating / feedbacks.length , 0)


  return (
    <div className='my-2 d-flex align-items-center justify-content-between'>
      <h5>Total Review : {feedbacks.length}</h5>
      <h5>Average Rating : {avrgRating.toFixed(2)}</h5>
    </div>
  )
}

export default AverageRating
