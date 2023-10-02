import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Soal1 from "./Pages/Soal1";
import Soal2 from "./Pages/Soal2";
import Soal3 from "./Pages/Soal3";
import Soal4 from "./Pages/Soal4";
function App() {

  return (
    <div className="App" id="MainApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route id="browserRoute" path="soal1" element={<Soal1 />} />
        <Route id="browserRoute" path="soal2" element={<Soal2 />} />
        <Route id="browserRoute" path="soal3" element={<Soal3 />} />
        <Route id="browserRoute" path="soal4" element={<Soal4 />} />
      </Routes>
    </div>
  );
}

export default App;
