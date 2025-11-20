function generateOddSeriesPattern(a) {
    let result = [];
    let count = a % 2 === 1 ? a : a - 1;
    
    for (let i = 1; i <= 2 * count - 1; i += 2) {
        result.push(i);
    }
    return result;
}

// Main program
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Example: node Program-3.js 5");
} else {
    const a = parseInt(args[0]);
    if (a < 1) {
        console.log("Please enter a positive number");
    } else {
        const result = generateOddSeriesPattern(a);
        console.log(`Input: a = ${a}`);
        console.log(`Output: ${result.join(', ')}`);
    }
}

module.exports = { generateOddSeriesPattern };
