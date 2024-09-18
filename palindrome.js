

function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    
    if (str.toLowerCase() === reversedStr.toLowerCase()) {
        return "It is a palindrome";
    } else {
        return "It is not a palindrome";
    }
}


let result = isPalindrome("malayalam");
console.log(result);  
