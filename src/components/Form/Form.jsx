import { useState } from "react"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import swal from 'sweetalert'

import { useCartContext } from "../../context/CartContext"

import "./Form.css"


function Form() {
    const[dataForm, setDataForm] = useState({email: "", emailConfirm: "", name: "", lastName:"", phone: ""})
    const {totalPrice, cartList, deleteCart} = useCartContext()

    async function generateOrder(e) {
        e.preventDefault()
        let order = {}
    
        if(dataForm.name && dataForm.lastName&& dataForm.phone && dataForm.email && (dataForm.email === dataForm.emailConfirm)) {
            order.buyer = dataForm
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
            .then(resp =>
                swal({
                    title:`Gracias por tu compra, tu orden ha sido generada con el número ${resp.id}`,
                    icon: "success"}))
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
            .finally(()=> console.log("updated"))
        
            batch.commit()
        }
        else {swal({
            title:"Por favor, verifica que los datos sean correctos",
            icon: "warning"})}
    }

    const handlerChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    
  return (
    <div>
        <h2>Formulario</h2>
        <div className="form">
            <input name='name' type="text" placeholder='Nombre' value={dataForm.name} onChange={handlerChange}></input>
            <input name='lastName' type="text" placeholder='Apellido' value={dataForm.lastName} onChange={handlerChange}></input>
            <input name='phone' type="text" placeholder='Teléfono' value={dataForm.phone} onChange={handlerChange}></input>
            <input name='email' type="email" placeholder='Email' value={dataForm.email} onChange={handlerChange}></input>
             <input name='emailConfirm' type="email" placeholder='Re-ingresa tu email' value={dataForm.emailConfirm} onChange={handlerChange}></input>
        </div>
        <button className="end-button" onClick={generateOrder}>Terminar compra</button>
    </div>
  )
}

export default Form