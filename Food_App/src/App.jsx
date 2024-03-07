import { useState } from "react";
import Search from "./Components/Search";
import Nav from "./Components/Nav";
import FoodList from "./Components/FoodList";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodID={setFoodID} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
