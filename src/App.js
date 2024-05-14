import "./App.css";
import AppbarComp from "./Components/AppbarComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComp from "./Components/Pages/Home/HomeComp";
// import { OffcanvasComp } from "./Components/OffcanvasComp";

function App() {
  return (
    <div className="App">
      <Router>
        <AppbarComp />
        <Routes>
          <Route path="/" element={<HomeComp />} />
        </Routes>
      </Router>

   
      
    </div>
  );
}

export default App;
