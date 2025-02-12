let str = "hello";
let str1 = new String("Hello")
console.log(str1);

// let str2 = String("Hello")
function reverseString (str2) {

    let result = "";
    for(let i = str2.length - 1;i >= 0;i--) {
        result += str2[i];
    }
    return result;
}

console.log(reverseString("hello"))

function checkPalindrome (str2) {
    for(let i = 0; i < str2.length/2; i++) {
        if(str2[i] !== str2[length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(checkPalindrome("abcd"))
//  console.log(result)

