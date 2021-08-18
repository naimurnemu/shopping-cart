// set quantity function
function changeNumber(product, perPrice, isUp) {
    const InputValue = document.getElementById(product + "-number");
    const valueText = InputValue.value;
    let productNumber = parseInt(valueText);

    if (isUp == true) {
        productNumber++;
        InputValue.value = productNumber;
    } else {
        if (productNumber > 0) {
            productNumber--;
            InputValue.value = productNumber;
        }
    }
    // update total price
    const priceValue = document.getElementById(product + "-total");
    priceValue.innerText = productNumber * perPrice;

    calculateTotal();
}

// input Number function
function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total
function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmout = subTotal + tax;

    // sub total update on html
    document.getElementById("sub-total").innerText = subTotal;

    // tax update on html
    document.getElementById("tax-amount").innerText = tax;

    // sub total update on html
    document.getElementById("total-amount").innerText = totalAmout;
}

// phone icrease number
document.getElementById("phone-plus").addEventListener("click", function () {
    changeNumber("phone", 1219, true);
});

// phone decrease number
document.getElementById("phone-minus").addEventListener("click", function () {
    changeNumber("phone", 1219, false);
});

// plus case
document.getElementById("case-plus").addEventListener("click", function () {
    changeNumber("case", 59, true);
});

// minus case
document.getElementById("case-minus").addEventListener("click", function () {
    changeNumber("case", 59, false);
});

const product = 5; 
const price = '7'; 
const subTotal = product * price; const tax = subTotal/10; 
const total = subTotal + tax; 
console.log(total)
