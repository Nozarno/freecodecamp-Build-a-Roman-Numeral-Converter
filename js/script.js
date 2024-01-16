const btnConvert = document.querySelector("#convert-btn");
const inputNumber = document.querySelector("#number");
const output = document.querySelector("#output");




btnConvert.addEventListener('click', () => {
    // Click on button convert
    const valueInput = inputNumber.value;
    if (!valueInput) {
        // empty string
        output.innerHTML = `<p>Please enter a valid number</p>`;
        return;
    }
    if (valueInput < 1) {
        output.innerHTML = "<p>Please enter a number greater than or equal to 1</p>";
        return;
    }
    if (valueInput > 4000) {
        output.innerHTML = "<p>Please enter a number less than or equal to 3999</p>";
        return;
    }
    let romainNumber = numberToRomain(valueInput);
    output.innerHTML = `<p>${romainNumber}</p>`;

});

function numberToRomain(number) {
    if(isNaN(number)) {
        console.log("Error f'numberToRomain : <number> is not a number ");
        return;
    }
    const tableConvert = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let out = [];
    let numTest;

    while (number > 0) {
        for (const key in tableConvert) {
            numTest = number - tableConvert[key];
            if (numTest >= 0) {
                out.push(key);
                number = numTest;
                break;
            }
        }

    }
    return out.join("");
}
