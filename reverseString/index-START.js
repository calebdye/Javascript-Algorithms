
//for/for of/for each approach
function reverseString(text) {
    let result = ''
    for(let char of text){
        result = char = result
    }
    return result
}
//recursion approach
function reverseString(text) {
if (text===''){
    return ''
} else {
    return reverseString(text.substr(1))+text[0]
}
}

//reduce
function reverseString(text) {
return [...text].reduce((a,b)=> b + a,'')
}
module.exports = reverseString;