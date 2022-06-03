import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import { products } from "../../data/data";
import { useParams } from "react-router-dom";


  const items = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

 function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

   useEffect(()=>{
     const db = getFirestore()
     const queryCollection = collection(db, "products")

     if(id) {
        const queryCollectionFilter = query(queryCollection, where("category","==", id))
        getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
        .catch((err) =>{console.log(err)})
        .finally(() => setLoading(false))
     }
     else {
        getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
     }   
   },[id])
 
    console.log(products)
    return (
        <>
            <h1>{greeting}</h1>
            {loading ? <Loader/>
            : (<ItemList products={products}/>)}
        </>
    )
}
  
  export default ItemListContainer;

 

