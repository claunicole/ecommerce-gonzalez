import { useState } from "react";
import "./ItemCount.css";
export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const addProducts = (number) => {
    setCount(count + number);
  };

  function addToCart() {
    if (count > 1) {
      alert(`Has agregado ${count} productos`);
    } else {
      alert(`Has agregado ${count} producto`);
    }
  }

  return (
    <div className="item-count-container">
      <p>Cantidad </p>
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
