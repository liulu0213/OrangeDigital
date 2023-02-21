import { useSelector } from "react-redux";
import type { AppState } from "../../store/";

import Button from "@mui/material/Button";

import { savePreferences, clearPreferences } from "../../api/localStorage";
import { CityWeather } from "../../store/weather";

const SaveMyLocationButton = function () {
  const weatherState = useSelector((state: AppState) => state.weather);
  const handleClick = function () {
    if (Object.keys(weatherState).length > 0) {
      savePreferences(weatherState as CityWeather);
    }
  };
  const handleClear = function () {
    clearPreferences();
  };
  return (
    <>
      <Button size="small" onClick={handleClick}>
        Save as Preference
      </Button>
      <Button size="small" onClick={handleClear}>
        Clear
      </Button>
    </>
  );
};

export default SaveMyLocationButton;
