import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { productos } from "../../data/data";

  const items = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  

 function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      items
        .then(resp => {setProductos(resp);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>{greeting}</h1> 
            {loading ? (<h2>Cargando...</h2>) : (<ItemList productos={productos}/>)}
        </div>
    )
}
  
  export default ItemListContainer;

 

