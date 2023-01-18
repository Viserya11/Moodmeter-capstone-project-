import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import questionsReducer from "../reducers/questionsReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "../reducers/loginReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const bigReducer = combineReducers({
  questions: questionsReducer,
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
