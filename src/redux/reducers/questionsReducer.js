import { FETCH_QUESTIONS, SUBMIT_RESULTS, SAVE_USER } from "../actions/index";

const initialState = {
  emotions: [],
  emotionsScore: {},
  isLoading: true,
  isLogin: "user",
};

const questionsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    case SUBMIT_RESULTS:
      return { ...state, emotionsScore: action.payload };
    case FETCH_QUESTIONS:
      const newState = {
        ...state,
        emotions: action.payload,
        isLoading: false,
      };
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default questionsReducer;
