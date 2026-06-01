let num1=20;
let num2=30;
x=num1+num2;
sub=num1-num2;
mul=num1*num2;
div=num1/5;
mod=num1%num2;


console.log(x)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)

// ===== ASSIGNMENT OPERATORS =====
console.log("\n--- Assignment Operators ---");
let a = 10;
a += 5;               // a = 15
console.log("a += 5:", a);
a -= 3;               // a = 12
console.log("a -= 3:", a);
a *= 2;               // a = 24
console.log("a *= 2:", a);
a /= 4;               // a = 6
console.log("a /= 4:", a);
a %= 3;               // a = 0
console.log("a %= 3:", a);

// ===== ARITHMETIC OPERATORS =====
console.log("\n--- Arithmetic Operators ---");
let num_a = 10;
let num_b = 3;
console.log("Addition:", num_a + num_b);        // 13
console.log("Subtraction:", num_a - num_b);    // 7
console.log("Multiplication:", num_a * num_b); // 30
console.log("Division:", num_a / num_b);       // 3.333...
console.log("Modulus:", num_a % num_b);        // 1
console.log("Exponentiation:", num_a ** num_b); // 1000
console.log("Increment:", ++num_a);            // 11
console.log("Decrement:", --num_b);            // 2

// ===== LOGICAL OPERATORS =====
console.log("\n--- Logical Operators ---");
let p = true;
let q = false;
console.log("AND (p && q):", p && q);          // false
console.log("OR (p || q):", p || q);           // true
console.log("NOT (!p):", !p);                  // false
console.log("Short-circuit (5 && 10):", 5 && 10);   // 10
console.log("Short-circuit (0 || 20):", 0 || 20);   // 20

// ===== BOOLEAN (COMPARISON) OPERATORS =====
console.log("\n--- Boolean/Comparison Operators ---");
let comp1 = 10;
let comp2 = 20;
console.log("Equal (==):", comp1 == comp2);           // false
console.log("Strictly Equal (===):", comp1 === comp2); // false
console.log("Not Equal (!=):", comp1 != comp2);       // true
console.log("Strictly Not Equal (!==):", comp1 !== comp2); // true
console.log("Less Than (<):", comp1 < comp2);         // true
console.log("Greater Than (>):", comp1 > comp2);      // false
console.log("Less or Equal (<=):", comp1 <= comp2);   // true
console.log("Greater or Equal (>=):", comp1 >= comp2); // false


