export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizesChoiceHTML = ""

    const sizesArray = sizes.map(
        (size) => {
            return `<div>
                <input type='radio' name='size' value='${size.id}' /> ${size.carets}
                </div>`
        }
    )
    
    sizesChoiceHTML += sizesArray.join("")


    return sizesChoiceHTML
}

// for (const size of sizes) {
//     sizesChoiceHTML += `<br><input type='radio' name='size' value='${size.id}' /> ${size.carets}`
// }