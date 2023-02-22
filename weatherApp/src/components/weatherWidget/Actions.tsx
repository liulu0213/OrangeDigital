import { useSelector, useDispatch } from "react-redux";
import type { AppState } from "../../store/";
import { pushMsg } from "../../store/message";

import Button from "@mui/material/Button";

import { savePreferences, clearPreferences } from "../../api/localStorage";
import { CityWeather } from "../../store/weather";

const Buttons = function () {
  const weatherState = useSelector((state: AppState) => state.weather);
  const dispatch = useDispatch();
  const handleClick = function () {
    if (Object.keys(weatherState).length > 0) {
      savePreferences(weatherState as CityWeather);
      dispatch(
        pushMsg({
          type: "success",
          content: `City ${weatherState.city.toUpperCase()} be saved.`,
        })
      );
    }
  };
  const handleClear = function () {
    clearPreferences();
    dispatch(pushMsg({ type: "info", content: "Preference be removed." }));
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

export default Buttons;
