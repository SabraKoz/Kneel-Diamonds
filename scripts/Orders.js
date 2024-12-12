export const OrderList = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

    let ordersHTML = ""
    const ordersArray = orders.map(
        (order) => {
            `<div>Order #${order}</div>`
        }
    )
    ordersHTML += ordersArray.join("")
    return ordersHTML
}