import { useEffect, useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd, handleInput}) {
  const [count, setCount] = useState(initial);
  const [itemStock, setItemStock] = useState(false);

  const addProducts = (number) => {
    setCount(count + number);
  };

  useEffect(() => {
    if(stock === 0) {
      setItemStock(true);
    }
    else {setItemStock(false);}
    }, [])

  function addItem() {
    onAdd(count);
    handleInput();
  }

  return (
    <>{itemStock 
      ? <h2>Agotado</h2>
      : 
        <div className="item-count-container">
        <div className="count-container">
          <button
            className="button-container"
            onClick={() => addProducts(-1)}
            disabled={count <= initial ? true : null}
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
          onClick={addItem}>Agregar al carrito
        </button>
      </div>
    }
    </>
  );
}
