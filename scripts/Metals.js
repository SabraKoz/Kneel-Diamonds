export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalsChoiceHTML = ""
    for (const metal of metals) {
        metalsChoiceHTML += `<input class='input' type='radio' name='metal' value='${metal.id}' /> ${metal.metal}`
    }
    return metalsChoiceHTML
}