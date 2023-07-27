import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { sendCartData, fetchCartData } from "./store/cartActions";

import Cart from "./components/Cart/Cart/Cart";
import Layout from "./components/UI/Layout/Layout";
import Products from "./components/Products/Products/Products";
import Notification from "./components/UI/Notification/Notification";

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const notification = useSelector((state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                {!showCart && <Products />}
            </Layout>
        </>
    );
}

export default App;
