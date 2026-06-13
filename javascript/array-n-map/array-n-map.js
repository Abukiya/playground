// basics of map
let weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2]
let english_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create an empty Map
const alphabet_wight_map = new Map();
const Reverseed_alphabet_wight_map = new Map();
// Set Map Values
for (let i = 0; i < english_alphabet.length; i++) {
    alphabet_wight_map.set(english_alphabet[i], weights[i]);
}
console.log(alphabet_wight_map);

for (let i = 0; i < english_alphabet.length; i++) {
    Reverseed_alphabet_wight_map.set(i,english_alphabet[25-i]);
}

console.log(Reverseed_alphabet_wight_map);

words = ["abcd","def","xyz"]
const words_wight_map = new Map();
let words_wight = 0;
let result=""
words.forEach(myFunction);



function myFunction(value, index, array) {
    for (let i = 0; i < value.length; i++) {
        words_wight+=alphabet_wight_map.get(value[i]);
    }
    result+=Reverseed_alphabet_wight_map.get(words_wight%26);
    words_wight=0;
}
console.log(result);