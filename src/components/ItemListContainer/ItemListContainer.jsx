import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { products } from "../../data/data";


  const items = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  

 function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      items
        .then(resp => {setProducts(resp)})
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
    }, []);

    return (
        <>
            <h1>{greeting}</h1> 
            {loading ? <Loader/>
            : (<ItemList products={products}/>)}
        </>
    )
}
  
  export default ItemListContainer;

 

