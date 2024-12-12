import { placeOrder } from "./TransientState.js"

const handlePlaceOrderClick = (event) => {
    if (event.target.id === "placeOrder") {
        placeOrder()
    }
}

export const PlaceOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return "<div><button id='placeOrder'>Place Order</button></div>"
}