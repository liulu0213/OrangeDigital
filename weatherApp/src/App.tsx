import "./App.css";

import WeatherSwitcher from "./features/weatherSwitch";
import WeatherWidget from "./components/weatherWidget";

function App() {
  return (
    <div className="App">
      <WeatherSwitcher />
      <WeatherWidget />
    </div>
  );
}

export default App;
