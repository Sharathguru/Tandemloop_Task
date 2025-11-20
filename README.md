# Programming Test - First Screening

## Overview
This repository contains solutions to 4 very basic programming problems implemented in **JavaScript (Node.js)**. The test duration is 60 minutes and focuses on fundamental programming concepts that can be solved without external assistance.

## Programming Language
- **Language**: JavaScript (Node.js)
- **Version**: Basic JavaScript (ES5 compatible)
- **Runtime**: Node.js

## Problem Solutions

### Problem 1: Simple Calculator (`Program-1.js`) - **15 lines**
**Objective**: Create a basic calculator that performs simple arithmetic operations.

**Features**:
- Basic addition, subtraction, multiplication, and division
- Simple if statements
- Basic error handling for division by zero

**Usage**:
```bash
node Program-1.js <number1> <number2> <operation>
```

**Examples**:
```bash
node Program-1.js 10 5 addition      # Returns: 10 addition 5 = 15
node Program-1.js 10 3 subtraction   # Returns: 10 subtraction 3 = 7
node Program-1.js 6 7 multiplication # Returns: 6 multiplication 7 = 42
node Program-1.js 15 3 division      # Returns: 15 division 3 = 5
```

---

### Problem 2: Odd Number Series (`Program-2.js`) - **20 lines**
**Objective**: Generate a simple series of odd numbers.

**Pattern**: For input `a`, generate odd numbers from 1 to (2a-1)

**Usage**:
```bash
node Program-2.js <number>
```

**Examples**:
```bash
node Program-2.js 1  # Returns: Input: a = 1, Output: 1
node Program-2.js 2  # Returns: Input: a = 2, Output: 1, 3
node Program-2.js 3  # Returns: Input: a = 3, Output: 1, 3, 5
node Program-2.js 4  # Returns: Input: a = 4, Output: 1, 3, 5, 7
```

---

### Problem 3: Pattern-Based Odd Series (`Program-3.js`) - **20 lines**
**Objective**: Generate odd numbers with a simple pattern.

**Pattern**: 
- Odd inputs: generate 'a' odd numbers
- Even inputs: generate 'a-1' odd numbers

**Usage**:
```bash
node Program-3.js <number>
```

**Examples**:
```bash
node Program-3.js 1  # Returns: Input: a = 1, Output: 1
node Program-3.js 2  # Returns: Input: a = 2, Output: 1
node Program-3.js 3  # Returns: Input: a = 3, Output: 1, 3, 5
node Program-3.js 4  # Returns: Input: a = 4, Output: 1, 3, 5
node Program-3.js 5  # Returns: Input: a = 5, Output: 1, 3, 5, 7, 9
node Program-3.js 6  # Returns: Input: a = 6, Output: 1, 3, 5, 7, 9
```

---

### Problem 4: Multiples Counter (`Program-4.js`) - **25 lines**
**Objective**: Count multiples of numbers 1-9 in an array.

**Usage**:
```bash
node Program-4.js <number1> <number2> <number3> ...
```

**Example**:
```bash
node Program-4.js 1 2 8 9 12 46 76 82 15 20 30
```

**Output**:
```json
{
  "1": 11,
  "2": 8,
  "3": 4,
  "4": 4,
  "5": 3,
  "6": 2,
  "7": 0,
  "8": 1,
  "9": 1
}
```

## How to Run

### Prerequisites
- Node.js installed on your system
- Basic knowledge of JavaScript

### Running Programs
Each program accepts simple command-line arguments:

```bash
# Problem 1: Calculator (15 lines)
node Program-1.js 10 5 addition

# Problem 2: Odd Number Series (20 lines)
node Program-2.js 5

# Problem 3: Pattern-Based Odd Series (20 lines)
node Program-3.js 6

# Problem 4: Multiples Counter (25 lines)
node Program-4.js 1 2 8 9 12 46 76 82 15 20 30
```

## Code Structure

### Common Features Across All Programs
- **Extremely Short**: Each program is 15-25 lines only
- **Basic Logic**: Simple programming concepts only
- **Basic Loops**: Simple for loops and if statements
- **Minimal Code**: No unnecessary features
- **Direct Execution**: No function wrappers
- **Basic Input/Output**: Simple console.log and command line arguments

### Code Quality
- Very basic JavaScript syntax
- Simple variable declarations (let, const)
- Basic arithmetic operations
- Simple array and object handling
- Easy to read and modify
- Quick to write and debug

## Programming Level
These programs are designed for **VERY BASIC** level programming tests:
- No external libraries or packages
- No advanced JavaScript features
- No complex algorithms
- Basic problem-solving skills only
- Can be completed in 5-10 minutes each
- Suitable for beginners and basic programming tests

## Notes
- All solutions use only basic programming concepts
- Code is intentionally very short and straightforward
- No external assistance required
- Easy to understand and modify
- Perfect for basic programming interviews
- Each program demonstrates one simple concept

## Author
This repository contains solutions to the TANDEMLOOP programming test, implemented in very basic JavaScript with Node.js runtime environment.

---

**Be Awesome!** 🚀
