class Calculator {
    calculate(a, b, operation) {
        if (operation === 'addition') return a + b;
        if (operation === 'subtraction') return a - b;
        if (operation === 'multiplication') return a * b;
        if (operation === 'division') return b === 0 ? "Cannot divide by zero" : a / b;
        return "Invalid operation";
    }
}

// Main program
const args = process.argv.slice(2);
if (args.length !== 3) {
    console.log("Usage: node Program-1.js <number1> <number2> <operation>");
    console.log("Example: node Program-1.js 10 5 addition");
} else {
    const calc = new Calculator();
    const result = calc.calculate(parseFloat(args[0]), parseFloat(args[1]), args[2]);
    console.log(`${args[0]} ${args[2]} ${args[1]} = ${result}`);
}

module.exports = Calculator;
