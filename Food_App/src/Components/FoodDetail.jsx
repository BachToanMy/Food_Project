import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
export default function FoodDetail({ foodID }) {
  const [foodInfo, setFoodInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_Key = "7cce4dd50e874bd4a8a3334f3393e1e8";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`);
      const data = await res.json();
      console.log(data);
      setFoodInfo(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{foodInfo.title}</h1>
        <img className={styles.recipeImage} src={foodInfo.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏳ {foodInfo.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦Serves: {foodInfo.serving}</strong>
          </span>
          <span>
            <strong>{foodInfo.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
          <span>
            <strong>
              {foodInfo.vegetarian ? "🫛 Vegetarian" : "🥩 None Vegetarian"}
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{foodInfo.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          <ItemList foodInfo={foodInfo} isLoading={isLoading}/>
          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                foodInfo.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
