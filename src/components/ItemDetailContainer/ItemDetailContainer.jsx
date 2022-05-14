import { useEffect, useState } from "react";
import { products } from "../../data/data"
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";

const findItem = (id) => {
  return new Promise ((resolve) =>{
    setTimeout(() => {
        const itemDet = id ? products.find(item => item.id === id) : products
        resolve (itemDet)
    },2000);
  });
}


function ItemDetailContainer({}) {

  const [product, setProduct] = useState([]);
  const[loading, setLoading] = useState([true]);

  useEffect(() =>{
    findItem("4")
    .then((resp) =>{setProduct(resp)})
    .catch((err) =>{console.log(err)})
    .finally(() => setLoading(false))
  },[])

 
  return (
    <>
    {loading ? <Loader/>
    : (<ItemDetail id={product.id} name={product.name} description={product.description} price={product.price} img={product.pictureUrl} stock={product.stock}/>)}
    </>
  )
}

export default ItemDetailContainer