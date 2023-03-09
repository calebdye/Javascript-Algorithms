
// function capSentence(text) {
//     let words = text.toLowerCase().split(' ')
//     let caps = []
//     words.forEach((word)=> {
//         caps.push(word[0].toUpperCase() + word.slice(1))
//     })
//     return caps.join(' ')
// }
 

// function capSentence(text) {
//     let words = text.toLowerCase().split(' ')
//     let caps = words.map((word)=> {
//         return word[0].toUpperCase() + word.slice(1)
//     })
    
//     return caps.join(' ')
// }

function capSentence(text) {
    let words = text.toLowerCase().split(' ')
    let caps = words.map((word)=> {
        return word.replace(word[0],word[0].toUpperCase())
    })
    
    return caps.join(' ')
}
 
module.exports = capSentence;