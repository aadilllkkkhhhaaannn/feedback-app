import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const Form = () => {

const {addFeedback , edit} = useContext(FeedbackContext)

const [rating , setRating] = useState(0)
const [review , setReview] = useState("")

const handleSubmit = (e) => {
e.preventDefault()
addFeedback(rating , review)
setRating(0)
setReview("")
}

useEffect(() => {
  setRating(edit.feedback.rating);
  setReview(edit.feedback.review);
},[edit])

  return (
    <div className='card p-3'>
        <h1 className='text-center'>Give Your Feedback</h1>
        <form onSubmit={handleSubmit}>
            <select className='form-select my-3' value={rating} onChange={(e => setRating (e.target.value))}>
                
                <option value="2">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <textarea value={review} onChange={(e => setReview (e.target.value))} required placeholder='Write Review Here...' className="form-control">
            </textarea>
            <button className='btn btn-primary w-100 my-3'>Submit Your Review</button>
        </form>
      
    </div>
  )
}

export default Form
