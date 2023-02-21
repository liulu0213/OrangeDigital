import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather";
import messageReducer from "./message";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    message: messageReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
