import { useState } from "react";
import Search from "./Components/Search";
import Nav from "./Components/Nav";
import FoodList from "./Components/FoodList";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData}/>
    </div>
  );
}

export default App;
