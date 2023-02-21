import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherDetail {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export interface CityWeather {
  city: string;
  detail: WeatherDetail;
}

const initialState: CityWeather | {} = {};

export const cityWeatherSlice = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    switchCity: (state, action: PayloadAction<CityWeather>) => {
      return action.payload;
    },
  },
});

export const { switchCity } = cityWeatherSlice.actions;

export default cityWeatherSlice.reducer;
