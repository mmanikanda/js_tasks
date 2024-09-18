function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c && b > a) {
        return b;
    } else {
        return c;
    }
}


let largest = findLargest(12, 22, 3);
console.log(largest); 
