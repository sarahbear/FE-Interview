const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squaredNumbers = numbers.map(function (num) {
    return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

function curriedAdd(x) {
    return function (y) {
        return x + y;
    }
}

const addFive = curriedAdd(5);
console.log(addFive(3)); // 8

console.log(curriedAdd(2)(3)); // 5

