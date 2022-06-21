import {createContext, useContext, useState} from 'react';


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

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteCart,
            deleteItem,
            totalCount,
            totalPrice,
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider