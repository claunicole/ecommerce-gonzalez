import { useEffect, useState } from "react";
import { products } from "../../data/data"
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const findItem = (id) => {
  return new Promise ((resolve) =>{
    setTimeout(() => {
        const itemDet = id ? products.find(product => product.id === id) : products
        resolve (itemDet)
    },2000);
  });
}


function ItemDetailContainer({}) {

  const [product, setProduct] = useState([]);
  const[loading, setLoading] = useState([true]);
  const {detalleId} = useParams()

  useEffect(() =>{
    findItem(detalleId)
    .then((resp) =>{setProduct(resp)})
    .catch((err) =>{console.log(err)})
    .finally(() => setLoading(false))
  },[detalleId])

 
  return (
    <>
    {loading ? <Loader/>
    : (<ItemDetail product={product}/>)}
    </>
  )
}

export default ItemDetailContainer