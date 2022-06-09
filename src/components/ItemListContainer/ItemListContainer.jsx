import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";


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
 

    return (
        <>
            {loading ? <Loader/>
            : (<ItemList products={products}/>)}
        </>
    )
}
  
  export default ItemListContainer;

 

