// helping functions
function updateProductNumber (product, price, isDecreasing) {
  const productInput = document.getElementById(`${product}-number`);
  let productNumber = parseInt(productInput.value);
  if (isDecreasing) {
    if (productNumber > 0) productNumber -= 1;
  } else {
    productNumber += 1;
  }
  // update product
  productInput.value = productNumber;
  const productPrice = document.getElementById(`${product}-price`);
  productPrice.innerText = productNumber * price;
  // calculate total
  const subTotal = calculateTotal();
  const taxAmount = (subTotal * 10) / 100;
  const total = subTotal + taxAmount;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = taxAmount;
  document.getElementById('total-amount').innerText = total;
};

function getInputValue (product) {
  const productInput = document.getElementById(`${product}-number`);
  const productNumber = +productInput.value;
  return productNumber;
}

function calculateTotal () {
  const phoneTotal  = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  return subTotal;
}

// event handlers

// for phone  
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, false);
});

document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
});

// for case
document.getElementById('case-plus').addEventListener('click', function() {
  updateProductNumber('case', 59, false);
});

document.getElementById('case-minus').addEventListener('click', function() {
  updateProductNumber('case', 59, true);
});