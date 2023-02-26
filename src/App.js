import './App.css';
import Floor1 from './map-floor1';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
                element={<Floor1/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
