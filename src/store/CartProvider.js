import CartContext from "./cart-context";
import React from "react";

const defaultCartState = {
    items :[],
    totalAmount:0
}


const cardReducer = (state,action) =>{
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items : updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState;
}


const CartProvider = props =>{

    const [cartState, dispatchCartAction] = React.useReducer(cardReducer, defaultCartState);

    const addItemToCartHandler = item =>{
        dispatchCartAction({
            type:"ADD",
            item:item
        })
    };
    const removeItemFromCartHandler = id =>{
        dispatchCartAction({
            type:"REMOVE",
            id:id
        })
    };
    

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        additem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;