import { createContext, useReducer } from "react";
import FeedbackReducer from "./FeedbackReducer";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedbacks: [],
    edit: {
      feedback: {},
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(FeedbackReducer, initialState);

  // Add feedback

  const addFeedback = (rating, review) => {
    dispatch({
      type: "SAVE_FEEDBACK",
      payload: { id: crypto.randomUUID(), rating, review },
    });
  };

  // Delete feedback

  const deleteFeedback = (id) => {
    dispatch({
      type: "DELETE_FEEDBACK",
      payload: id,
    });
  };

// Edit feedback

const editFeedback = (feedback) => {
    dispatch({
        type : "EDIT_FEEDBACK",
        payload : feedback,
    })
}

  return (
    <FeedbackContext.Provider
      value={{ ...state, addFeedback: addFeedback, deleteFeedback , editFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
