import './App.css';
import Floor2 from './map-floor2';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
                element={<Floor2/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
