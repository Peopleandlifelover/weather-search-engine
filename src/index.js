import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather Search Engine</h1>
        <WeatherSearch />
        <footer>
          <a
            href="https://github.com/Peopleandlifelover/weather-search-engine"
            target="_blank"
          >
            My git repository
          </a>
        </footer>
      </div>
    </div>
  </StrictMode>
);
