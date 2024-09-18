function prime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            break;
        }
    }
    if (i == num) {
        console.log('it is prime');
    } else {
        console.log('it is not prime');
    }
}
prime(20)