import Item from "./Item";
export default function ItemList({ foodInfo, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        foodInfo.extendedIngredients.map((item) => (
          <Item item={item}/>
        ))
      )}
    </div>
  );
}
