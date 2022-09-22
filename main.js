// test one
const words = 'This is a bOy';
function removeVowel(str) {
    return str.replace(/[aeiou]/gi, '')
};
console.log(removeVowel(words));

// test two
const text = "The sunset sets at twelve o' clock.";
function alphaPosition(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91)
        result += (code - 64) + ' ';
    }
    return result.slice(0, result.length - 1);
}
console.log(alphaPosition(text))


let firstArr = [1,2,3,4,5,6,7,8];
let secondArr = [1,9,10,3,7];
let newArr = []
for (let i = 0; i < firstArr.length; ++i) {
    for (let j = 0; j < secondArr.length; ++j) {
        if (firstArr[i] === secondArr[j]) {
            newArr.push(firstArr[i])
        }
    }
}
console.log(newArr);