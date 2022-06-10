import {createContext, useContext, useState} from 'react';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function isInCart (id) {
        return cartList.some(article => article.id === id)
    }

    function addToCart(item){
        if(isInCart(item.id)){
           const newCart = cartList.map(article => {
               if(article.id === item.id) {
                   article.count = item.count + article.count;
               }
               return article;
           })
        setCartList(newCart);

        }
        else {
            setCartList([
                ...cartList,
                item
            ])
        }}

    const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }

    const totalCount = () => {
        return cartList.reduce((qty, product) => qty += product.count ,0)
    }

    const totalPrice = () => {
        return cartList.reduce((price, product) => price + (product.count * product.price) ,0)
    }

    const deleteCart = () => {
        setCartList([])
    }

    async function generateOrder() {
        let order = {}
    
        order.buyer = { name: "Claudia", email: "mail@mail.com", phone: "123456789" }
        order.total = totalPrice()
    
        order.products = cartList.map(cartItem => {
          const id = cartItem.id
          const name = cartItem.name
          const quantity = cartItem.count
          const price = cartItem.price * cartItem.count
    
          return { id, name, quantity, price }
        })
       
        const db = getFirestore()
        const queryCollection = collection(db, "orders")
    
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => deleteCart())
    
        const queryCollectionStock = collection(db, "products")
        const queryUpdateStock = query (
          queryCollectionStock,
          where( documentId(), "in", cartList.map(it => it.id) ))
    
        const batch = writeBatch(db)
    
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(product => product.id === res.id).count
        })))
        .finally(()=> console.log("uppdated"))
    
        batch.commit()
      }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteCart,
            deleteItem,
            totalCount,
            totalPrice,
            generateOrder
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider