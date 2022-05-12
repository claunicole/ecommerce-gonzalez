import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { productos } from "../../data/data";
import { Ring } from '@uiball/loaders'

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
        .then(resp => {setProductos(resp)})
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
    }, []);

    return (
        <div>
            <h1>{greeting}</h1> 
            {loading ? (<h2 className="loading">
              <Ring 
                size={40}
                lineWeight={5}
                speed={2} 
                color="black" 
              /></h2>) 
              : (<ItemList productos={productos}/>)}
        </div>
    )
}
  
  export default ItemListContainer;

 

