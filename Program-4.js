
function countMultiples(numbers) {
    let result = {};
    for (let i = 1; i <= 9; i++) result[i] = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j <= 9; j++) {
            if (numbers[i] % j === 0) result[j]++;
        }
    }
    return result;
}

// Main program
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Example: node Program-4.js 1 2 8 9 12 46 76 82 15 20 30");
} else {
    let numbers = [];
    for (let i = 0; i < args.length; i++) {
        numbers.push(parseInt(args[i]));
    }
    
    const result = countMultiples(numbers);
    console.log(`Input array: [${numbers.join(', ')}]`);
    console.log("Output:");
    console.log(JSON.stringify(result, null, 2));
}

module.exports = { countMultiples };
