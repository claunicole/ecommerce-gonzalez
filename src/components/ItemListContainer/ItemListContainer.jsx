import { useEffect, useState } from "react";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

import "./ItemListContainer.css"


 function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

   useEffect(()=>{
     const db = getFirestore()
        
        const queryCollection = collection(db, "products")
        const queryCollectionFilter = id ? query(queryCollection, where("category","==", id)) : queryCollection

        getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
        .catch((err) =>{console.log(err)})
        .finally(() => setLoading(false))   
   },[id])
 

    return (
        <div className="item-list-container">
            {loading ? <Loader/>
            : (<ItemList products={products}/>)}
        </div>
    )
}
  
  export default ItemListContainer;

 

