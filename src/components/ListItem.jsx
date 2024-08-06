import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ListItem = ({ feedback  , theme  , changetheme}) => {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <>
      <li className="list-group-item">
        <h1>Rating : {feedback.rating}</h1>
        <h3 className="text-secondary">Review : {feedback.review}</h3>
        <span className="float-end">
          <button className="btn text-dark btn-sm btn-warning mx-2" onClick={() => editFeedback(feedback)}>
            Edit
          </button>
          <button className={theme ? "btn btn-sm btn-danger" : "btn btn-sm btn-dark"} onClick={()=>deleteFeedback(feedback.id)} >Delete</button>
        </span>
      </li>
     
    </>
  );
};

export default ListItem;
