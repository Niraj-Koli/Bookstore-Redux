import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";

import { uiActions } from "../../../store/uiSlice";

function CartButton() {
    const dispatch = useDispatch();

    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    function toggleCartHandler() {
        dispatch(uiActions.toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
}

export default CartButton;
