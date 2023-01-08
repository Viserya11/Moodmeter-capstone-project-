import { FETCH_QUESTIONS } from '../actions/index';

const initialState = {
  emotions: [],
  isLoading: true
};

const questionsReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case FETCH_QUESTIONS:
      const newState = {
        ...state,
        emotions: action.payload,
        isLoading: false
      }
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;