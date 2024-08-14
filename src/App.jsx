import { MainPage } from "./pages/MainPage";
import { MapProvider } from "./Context/MapContext";

function App() {
  return (
    <MapProvider>
      <MainPage />
    </MapProvider>
  );
}

export default App;
