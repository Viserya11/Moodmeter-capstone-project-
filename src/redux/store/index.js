import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import questionsReducer from '../reducers/questionsReducer';

const bigReducer = combineReducers({
    questions: questionsReducer,
  });

  const store = configureStore({
    reducer: bigReducer,
  });

  export default store;