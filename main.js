// Getting Discount
function get_discount() {
    let amount = Number(document.getElementById('amount').value)
    let Discount = amount * 0.8;

    document.getElementById('output').innerHTML = 'Amount paid: Php ' + Discount;
}