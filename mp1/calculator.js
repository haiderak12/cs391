function calculate(operation) {
    let num1 = parseFloat(document.getElementById('first-number').value);
    let num2 = parseFloat(document.getElementById('second-number').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = Math.pow(num1, num2);
            break;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Result: ${result}`;
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'black';
    }
}

function clearFields() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('result').innerHTML = '';
}