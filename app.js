// helping functions
function updateProductNumber (isDecreasing) {
  const productInput = document.getElementById('product-number');
  const productNumber = parseInt(productInput.value);
  if (isDecreasing) {
    if (productNumber > 0) productInput.value = productNumber - 1;
  } else {
    productInput.value = productNumber + 1;
  }
}

// event handlers

// for plus button  
document.getElementById('product-plus').addEventListener('click', function () {
  updateProductNumber(false);
})

// for minus button
document.getElementById('product-minus').addEventListener('click', function () {
  updateProductNumber(true);
})