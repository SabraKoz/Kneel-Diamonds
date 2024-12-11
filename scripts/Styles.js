export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesChoiceHTML = ""
    for (const style of styles) {
        stylesChoiceHTML += `<input type='radio' name='style' value='${style.id}' /> ${style.style}`
    }


    return stylesChoiceHTML
}