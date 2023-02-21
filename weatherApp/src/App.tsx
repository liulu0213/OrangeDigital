import "./App.css";

import SearchBar from "./features/searchBar";
import WeatherWidget from "./components/weatherWidget";
import AppSnackBar from "./features/message";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherWidget />
      <AppSnackBar />
    </div>
  );
}

export default App;
