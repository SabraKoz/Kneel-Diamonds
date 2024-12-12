export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

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


// for (const metal of metals) {
// metalsChoiceHTML += `<br><input type='radio' name='metal' value='${metal.id}' />${metal.metal}`
// }       