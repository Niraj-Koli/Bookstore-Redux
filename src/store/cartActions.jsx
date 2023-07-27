import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export function fetchCartData() {
    return async (dispatch) => {
        async function fetchData() {
            const response = await fetch(
                "", // API Endpoint To Retrieve Cart Data //
                {
                    method: "GET",
                }
            );

            if (!response.ok) {
                throw new Error("Could Not Fetch Cart Data !!!");
            }

            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    status: "Error",
                    title: "Error!",
                    message: "Fetching Cart Data Failed !!!",
                })
            );
        }
    };
}

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "Pending",
                title: "Sending...",
                message: "Sending Cart Data!",
            })
        );

        async function sendRequest() {
            const response = await fetch(
                "", // API Endpoint To Send Cart Data //
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Sending Cart Data Failed.");
            }
        }

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "Success",
                    title: "Success!",
                    message: "Sent Cart Data Successfully !!!",
                })
            );
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    status: "Error",
                    title: "Error!",
                    message: "Sending Cart Data Failed!",
                })
            );
        }
    };
}
