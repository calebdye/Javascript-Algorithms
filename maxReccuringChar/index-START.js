
// function maxRecurringChar(text) {
//   let arr =  text.split('')
//   let obj = arr.map()
//   console.log(obj)
// }


// Formating arrays
function maxRecurringChar(text) {
    let charMap = {}
    let charArray =[]
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    charArray = Object.keys(charMap)
    vaulesArray = Object.values(charMap)
    maxCharValue = Math.max(...vaulesArray)
    
    return charArray[vaulesArray.indexOf(maxCharValue)]
}
module.exports = maxRecurringChar;