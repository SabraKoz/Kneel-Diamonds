import { setMetalChoice } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalsChoiceHTML = ""

    const metalsArray = metals.map(
        (metal) => {
            return `<div>
                <input type='radio' name='metal' value='${metal.id}' />${metal.metal}
                </div>`
        }
    )

     metalsChoiceHTML += metalsArray.join("")

    return metalsChoiceHTML
}

const handleMetalChange = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}


// for (const metal of metals) {
// metalsChoiceHTML += `<br><input type='radio' name='metal' value='${metal.id}' />${metal.metal}`
// }       