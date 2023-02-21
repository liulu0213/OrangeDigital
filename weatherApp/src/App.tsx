import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { switchCity } from "./store/weather";
import { getPreferences } from "./api/localStorage";
import "./App.css";

import SearchBar from "./features/searchBar";
import WeatherWidget from "./components/weatherWidget";
import AppSnackBar from "./features/message";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localdata = getPreferences();
    if (localdata["city"]) {
      dispatch(switchCity(localdata));
    }
  }, []);
  return (
    <div className="App">
      <SearchBar />
      <WeatherWidget />
      <AppSnackBar />
    </div>
  );
}

export default App;
