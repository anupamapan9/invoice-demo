document.getElementById('detail-submit-btn').addEventListener('click', function () {
    const userDetailsInput = document.getElementById('buyer-details-input');
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = userDetailsInput.value;
    userDetailsInput.value = '';
})

document.getElementById('add-details-btn').addEventListener('click', function () {
    const itemName = document.getElementById('item-name-input').value;
    const itemPrice = document.getElementById('item-price-input').value;
    const itemQuantity = document.getElementById('item-quantity-input').value;

    const totalPrice = parseFloat(itemPrice) * parseFloat(itemQuantity);
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    td1.innerText = itemName;
    td2.innerText = itemPrice;
    td3.innerText = itemQuantity;
    td4.innerText = totalPrice;
    td4.classList.add("item-total")

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    const tableBody = document.getElementById("info-table");
    tableBody.appendChild(tr);

    const subTotal = calSubTotal()
    const subTotalToDisplay = document.getElementById("sub-total");
    subTotalToDisplay.innerText = subTotal;
})

function calSubTotal() {
    let subTotalPrice = 0;
    const itemTotals = document.getElementsByClassName("item-total");
    for (let i = 0; i < itemTotals.length; i++) {
        const element = itemTotals[i];
        const price = parseFloat(element.innerText);
        subTotalPrice = subTotalPrice + price;
    }
    return subTotalPrice;

}