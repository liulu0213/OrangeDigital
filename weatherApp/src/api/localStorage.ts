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

export { savePreferences, clearPreferences };
