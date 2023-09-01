import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {addItem, removeItem} from '../redux/action'

const Cart = () => {

    const items = localStorage.getItem("mytask");
    
    

    const state = useSelector((state)=> state.cardRed)
    const dispatch = useDispatch()

    const addProduct = (item) => {
        dispatch(addItem(item))
    }
    const removeProduct = (item) => {
        dispatch(removeItem(item))
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    
    const cartItems = (product) => {
        return(
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=> removeProduct(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {/* {state.length === 0 && emptyCart()} */}
            {/* {state.length !== 0 && state.map(cartItems)} */}
            {/* <h1>{items[0].name}</h1> */}
            {/* {state.length !== 0 && buttons()} */}
            
                {/* for(const property in items){
                    <h1>{`${property}: ${items[property]}`}</h1>
                  } */}
            
        </div>
    );
}

export default Cart;
