function makeGreeter(greeting) {
    return function (name) {
        console.log(greeting + ', ' + name + '!');
    }
}

const sayHello = makeGreeter('Hello');
const sayGoodbye = makeGreeter('Goodbye');

sayHello('Sarah'); // Hello, Sarah!
sayGoodbye('Sarah'); // Goodbye, Sarah!