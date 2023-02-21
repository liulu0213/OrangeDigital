import type { CityWeather } from "../store/weather";

const savePreferences = function (obj: CityWeather) {
  const { city, detail } = obj;
  localStorage.setItem("city", city);
  Object.entries(detail).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
};

const clearPreferences = function () {
  localStorage.clear();
};

const getPreferences = function (): CityWeather | {} {
  const keys = Object.keys(localStorage);
  let result = {};
  if (keys.length > 0) {
    result = {
      city: localStorage.getItem("city") || "",
      detail: {
        temperature: localStorage.getItem("temperature") || 0,
        humidity: localStorage.getItem("humidity") || 0,
        windSpeed: localStorage.getItem("windSpeed") || 0,
      },
    };
  }
  return result;
};

export { savePreferences, clearPreferences, getPreferences };
