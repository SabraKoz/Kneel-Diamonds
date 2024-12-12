const transientState = {
    "metalChoice": "",
    "sizeChoice": 0,
    "styleChoice": ""
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalChoice = chosenMetal
    console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeChoice = chosenSize
    console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleChoice = chosenStyle
    console.log(transientState)
}

export const placeOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}