
// function palindromeChecker(text) {
//     let rev = text.split('').reverse().join('')

//     return rev === text

// }


// function palindromeChecker(text) {
//     let rev = text.split('')

//     let result = rev.every((letter, index)=>{
//         return letter === rev[rev.length - index -1]
//     })
//  return result
// }


function palindromeChecker(text) {
    let rev = text.split('')

    for(let i=0;i<rev.length/2;i++){
        
        if(text[i] !== text[text.length - 1 -i]){
            return false
        }

    }

    // let result = rev.every((letter, index)=>{
    //     return letter === rev[rev.length - index -1]
    // })
 return true
}

module.exports = palindromeChecker;