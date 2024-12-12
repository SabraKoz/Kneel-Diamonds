import { setStyleChoice } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChange)

    let stylesChoiceHTML = ""

    const stylesArray = styles.map(
        (style) => {
            return `<div>
                <input type='radio' name='style' value='${style.id}' /> ${style.style}
                </div>`
        }
    )

    stylesChoiceHTML += stylesArray.join("")
    
    return stylesChoiceHTML
}

const handleStyleChange = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}


// for (const style of styles) {
//     stylesChoiceHTML += `<br><input type='radio' name='style' value='${style.id}' /> ${style.style}`
// }