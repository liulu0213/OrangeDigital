import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather";

const store = configureStore({
  reducer: { weather: weatherReducer },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
