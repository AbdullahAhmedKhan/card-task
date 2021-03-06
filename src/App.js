import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import More from "./Components/More";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/more" element={<More></More>}></Route>
      </Routes>
    </div>
  );
}

export default App;
