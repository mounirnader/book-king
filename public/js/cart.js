const currency = document.querySelector('#total .price').innerHTML.substring(document.querySelector('#total .price').innerHTML.length -31);
const method = document.querySelector('#payment');
const creditInputs = document.querySelector('.payment').innerHTML

function calculate(price){
    const quantity = document.querySelector('#quantity').value;
    if(quantity<1) quantity = 1;
    document.querySelector('#quantity').value = quantity;
    const total = price * quantity;
    document.querySelector('#total .price').innerHTML = `${(total+40).toFixed(2)} ${currency}`;
}
function displayMethod(){
    if(method.value == 'cash'){
        document.querySelector('.payment').innerHTML = `
          <h2 class='cash'>Cash on Delivery</h2>
        `;
    }
    else document.querySelector('.payment').innerHTML = creditInputs
}
document.querySelector('.remove').addEventListener('click', function() {
    const bookRow = this.closest('.book');
    if (bookRow) {
        bookRow.remove();
    }
});
document.querySelector('.btn').addEventListener('click', function() {
    if(method.value == 'cash') location.replace("home.html")
    const form = document.querySelector('#creditCard');
  if (form.checkValidity()) {
    location.replace('home.html');
  } else {
    form.reportValidity();
  }
}
)
method.addEventListener('change', displayMethod)