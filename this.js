// call
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = {
    name: 'Sarah',
};

greet.call(person, 'Hello', '!'); // Hello, Sarah!

// apply
function sum(a, b, c) {
    console.log(this.name, a + b + c);
}

const obj = {
    name: 'Calculator',
}

const numbers = [1, 2, 3]
sum.apply(obj, numbers) // Calculator 6

// bind 方法用于创建一个新的函数，新函数的 this 指向 bind 方法的第一个参数，后续参数作为新函数的参数。
// bind 不立即执行
function sayHello() {
    console.log('Hello, ' + this.name + '!');
}

const user = {
    name: 'Sarah',
}

const sayHelloToUser = sayHello.bind(user);
sayHelloToUser(); // Hello, Sarah!
