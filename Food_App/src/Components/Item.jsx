import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.itemImage}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          alt=""
        />
      </div>
      <div>
        <div className={styles.nameContainer}>
          <div className={styles.itemName}>{item.name}</div>
        </div>
        <div className={styles.amounts}>
          {item.amount}
          {item.unit}
        </div>
      </div>
    </div>
  );
}
