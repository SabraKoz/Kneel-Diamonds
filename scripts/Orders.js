export const OrderList = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

    let ordersHTML = ""
    const ordersArray = orders.map(
        (order) => {
            return `<div>Order #${order.id}</div>`
        }
    )
    ordersHTML += ordersArray.join("")
    return ordersHTML
}
// const orderPrice = order.metal.price + order.style.price + order.size.price