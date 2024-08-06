const FeedbackReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_FEEDBACK":
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
      };

    case "DELETE_FEEDBACK":
      return {
        ...state,
        feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
      };

      case "EDIT_FEEDBACK" :
        return {
            ...state,
            edit : {feedback : action.payload , isEdit : true}
        }



  }
};

export default FeedbackReducer;