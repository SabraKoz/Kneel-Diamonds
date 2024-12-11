export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizesChoiceHTML = ""
    for (const size of sizes) {
        sizesChoiceHTML += `<input type='radio' name='size' value='${size.id}' /> ${size.carets}`
    }


    return sizesChoiceHTML
}