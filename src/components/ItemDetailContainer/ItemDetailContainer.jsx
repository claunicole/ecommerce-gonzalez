import { useEffect, useState } from "react";
import { products } from "../../data/data";
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const findItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const itemDet = id
        ? products.find((product) => product.id === id)
        : products;
      resolve(itemDet);
    }, 2000);
  });
};

function ItemDetailContainer({}) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { id } = useParams();

  useEffect(() => {
    findItem(id)
      .then((resp) => {
        setProduct(resp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  //  no estaria mal tener en la dependencia [] el id, de forma que si cambia se renderice el componente nuevamnete.
  // Esto igual solo pasaria si el usuario cambia el id de forma manual en la url

  return <>{loading ? <Loader /> : <ItemDetail product={product} />}</>;
}

export default ItemDetailContainer;
