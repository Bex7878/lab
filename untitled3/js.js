function getSum(a, b) {
    return a + b;
}

function displaySum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = getSum(num1, num2);
    document.getElementById("sumResult").textContent = `Sum: ${result}`;
}

function getMin(a, b, c) {
    return Math.min(a, b, c);
}

function displayMin() {
    const num1 = parseFloat(document.getElementById("min1").value);
    const num2 = parseFloat(document.getElementById("min2").value);
    const num3 = parseFloat(document.getElementById("min3").value);
    const result = getMin(num1, num2, num3);
    document.getElementById("minResult").textContent = `Minimum: ${result}`;
}

function evenOrOdd(a, b, c) {
    const isEven = (n) => n % 2 === 0;
    const allEven = isEven(a) && isEven(b) && isEven(c);
    const allOdd = !isEven(a) && !isEven(b) && !isEven(c);

    if (allEven) {
        return "even";
    } else if (allOdd) {
        return "odd";
    } else {
        return "even/odd";
    }
}

function displayEvenOdd() {
    const num1 = parseInt(document.getElementById("evenOdd1").value);
    const num2 = parseInt(document.getElementById("evenOdd2").value);
    const num3 = parseInt(document.getElementById("evenOdd3").value);
    const result = evenOrOdd(num1, num2, num3);
    document.getElementById("evenOddResult").textContent = `Result: ${result}`;
}
