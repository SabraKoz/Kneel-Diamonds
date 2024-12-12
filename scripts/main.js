import { MetalOptions } from "./Metals.js"
import { OrderList } from "./Orders.js"
import { PlaceOrderButton } from "./PlaceOrder.js"
import { SizeOptions } from "./Sizes.js"
import { StyleOptions } from "./Styles.js"

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const placeOrderButtonHTML = await PlaceOrderButton()
    const orderListHTML = await OrderList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orderListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", customEvent => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()