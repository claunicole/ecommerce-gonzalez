import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore"

import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";


function ItemDetailContainer() {

  const [product, setProduct] = useState([]);
  const[loading, setLoading] = useState([true]);
  const {id} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const dbQuery = doc(db, "products", id)
    getDoc(dbQuery)
    .then(resp => setProduct({ id: resp.id, ...resp.data()}))
    .catch((err) =>{console.log(err)})
    .finally(() => setLoading(false))
  }, [id])

  return (
    <div className="item-detail-container">
      {loading ? <Loader/>
               : (<ItemDetail product={product}/>)}
    </div>
  )
}   

export default ItemDetailContainer