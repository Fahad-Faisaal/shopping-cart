// helping functions
function updateProductNumber (product, price, isDecreasing) {
  const productInput = document.getElementById(`${product}-number`);
  let productNumber = parseInt(productInput.value);
  if (isDecreasing) {
    if (productNumber > 0) productNumber -= 1;
  } else {
    productNumber += 1;
  }
  productInput.value = productNumber;
  const productPrice = document.getElementById(`${product}-price`);
  productPrice.innerText = productNumber * price;
}

// event handlers

// for phone  
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, false);
})

document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
})

// for case
document.getElementById('case-plus').addEventListener('click', function() {
  updateProductNumber('case', 59, false);
})

document.getElementById('case-minus').addEventListener('click', function() {
  updateProductNumber('case', 59, true);
})