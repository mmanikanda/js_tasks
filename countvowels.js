function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'i', 'o', 'u', 'e'];
    
    for (let s of str.toLowerCase()) {
        if (vowels.includes(s)) {
            count++;
        }
    }
    
    return count;
}


let result = countVowels("cOmputer");
console.log(result); 
