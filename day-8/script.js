function iseven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("4 is even:", iseven(4));
console.log("7 is even:", iseven(7));

const greet = function() {
    console.log("Hello, World!");
};

greet();

const add = (a, b) => {
    return a + b;
};

console.log("addition of two numbers:", add(5, 3));

const square = x => x * x;
console.log("square of a number:", square(4));

function cube(a, callback) {
    console.log("cube of a number:", a * a * a);
    callback();
}

cube(4, function() {
    console.log("This is an anonymous function.");
});

function sub(a, b, callback) {
    console.log("subtraction of two numbers:", a - b);
    callback();
}

sub(8, 3, function() {
    console.log("This is a callback function.");
});

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr.length);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
