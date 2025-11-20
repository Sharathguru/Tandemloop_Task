function generateOddSeries(a) {
    let result = [];
    for (let i = 1; i <= 2 * a - 1; i += 2) {
        result.push(i);
    }
    return result;
}

// Main program
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Example: node Program-2.js 5");
} else {
    const a = parseInt(args[0]);
    if (a < 1) {
        console.log("Please enter a positive number");
    } else {
        const result = generateOddSeries(a);
        console.log(`Input: a = ${a}`);
        console.log(`Output: ${result.join(', ')}`);
    }
}

module.exports = { generateOddSeries };
