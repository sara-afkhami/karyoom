export const getNumberFromEndStrings = (strings) => {
    if(strings.match(/\d+$/)!== null) return strings.match(/\d+$/)[0]
    else return "1"
}