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
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
