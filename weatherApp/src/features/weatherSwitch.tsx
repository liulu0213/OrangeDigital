import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchCity } from "../store/weather";

import { getWeather } from "../api/api";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

import type { CityWeather } from "../store/weather";

const WeatherSwitcher = function () {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    const target = e.target;
    setCity(target.value);
  };
  const handleSearch = async function () {
    if (city != "") {
      try {
        const result = await getWeather(city);
        dispatch(switchCity(result as CityWeather));
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <Box>
      <Input placeholder="city name" name="cityName" onChange={handleChange} />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
};
export default WeatherSwitcher;
