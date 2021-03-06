import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import React from 'react';

const HeaderCardButton =(props)=>{
    const cartCtx= React.useContext(CartContext)

    const numberOfItems = cartCtx.items.reduce((curNumber,item) =>{
        return curNumber+item.amount;
    },0)    
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCardButton;