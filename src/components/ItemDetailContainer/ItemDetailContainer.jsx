import { useEffect, useState } from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore"
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer({}) {

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
    <>
    {loading ? <Loader/>
    : (<ItemDetail product={product}/>)}
    </>
  )
}

export default ItemDetailContainer