
// function vowelsCounter(text) {
//     let vowels = ['a','e','i','o','u']
//     let count = 0
//     for(letter of text.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++
//         }
        
//     } 
//     return count
// }

function vowelsCounter(text) {
    let count = text.match(/[aeiou]/gi);
    if(count){
        return count.length
    }else {
        return 0
    }
}

module.exports = vowelsCounter;