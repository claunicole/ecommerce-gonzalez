import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const addProducts = (number) => {
    setCount(count + number);
  };

  function addToCart() {
    onAdd(count);
  }

  return (
    <div className="item-count-container">
      <div className="count-container">
        <button
          className="button-container"
          onClick={() => addProducts(-1)}
          disabled={count <= 1 ? true : null}
        >
          -
        </button>
        {count}
        <button
          className="button-container"
          onClick={() => addProducts(+1)}
          disabled={count === stock ? true : null}
        >
          +
        </button>
      </div>
      <button className="button-cart"
      onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}
