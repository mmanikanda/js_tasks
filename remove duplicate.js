function removeDuplicates(arr) {

    return arr.filter((x, y) => {
        return arr.indexOf(x) === y;
    });
}


let arr = [1, 2, 3, 4, 5, 5, 4, 3];
let a = removeDuplicates(arr);
console.log(a);
