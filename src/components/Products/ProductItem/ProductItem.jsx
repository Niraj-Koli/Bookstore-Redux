import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.css";

import { cartActions } from "../../../store/cartSlice";

import Card from "../../UI/Card/Card";

function ProductItem(props) {
    const dispatch = useDispatch();

    const { title, price, description, id } = props;

    function addToCartHandler() {
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
            })
        );
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>₹ {price.toFixed(2)}</div>
                </header>
                <p className={classes.desc}>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
}

export default ProductItem;