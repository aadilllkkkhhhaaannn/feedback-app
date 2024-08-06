import React, { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from '../context/FeedbackContext'

const ListGroup = () => {

  const {feedbacks} = useContext(FeedbackContext)
  return (
   <ul className='my-2 list-group'>
    {
      feedbacks.map(feedback =>    <ListItem key={feedback.id} feedback={feedback} />    )
    }
   </ul>
  )
}

export default ListGroup
