// Sort the string According to the frequency of character
function FrequentCharater(str) {
    let charMap = {};
    let charArray = [];
    let result = '';
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }
    for(let char in charMap){
        charArray.push([char, charMap[char]]);
    }
    charArray.sort((a, b) => b[1] - a[1]);
    for(let char of charArray){
        result += char[0].repeat(char[1]);
    }
    return result;
}

console.log(FrequentCharater("tree"));
console.log(FrequentCharater("cccaaa"));
console.log(FrequentCharater("Aabb"));
console.log(FrequentCharater("loveleetcode"));
console.log(FrequentCharater("Programming"));
