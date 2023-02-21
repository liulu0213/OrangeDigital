import type { CityWeather, WeatherDetail } from "../store/weather";

type WeatherData = {
  [index: string]: WeatherDetail;
};
// pseudo database
const weatherData: WeatherData = {
  "New York": {
    temperature: 22,
    humidity: 0.6,
    windSpeed: 5,
  },
  London: {
    temperature: 18,
    humidity: 0.8,
    windSpeed: 4,
  },
  Paris: {
    temperature: 20,
    humidity: 0.7,
    windSpeed: 6,
  },
  Berlin: {
    temperature: 21,
    humidity: 0.75,
    windSpeed: 7,
  },
};

const getWeather = function (city: string): Promise<Error | CityWeather> {
  const result = {
    city: city,
    detail: weatherData[city],
  };
  return new Promise((resolve, reject) => {
    if (!result.detail) {
      return setTimeout(
        () => reject(new Error(`${city} weather not found`)),
        250
      );
    }

    setTimeout(() => resolve(result), 250);
  });
};
export { getWeather };
