
var products = [
    {name: "milk", price: 1.10},
    {name: "coffee", price: 3.50},
    {name: "juice", price: 0.75},
    {name: "lemonade", price: 0.90},
    {name: "beer", price: 2.70},
    {name: "sour milk", price: 0.80}
];

window.onload = function() {
    populateTable();
    populateFilter();
    document.getElementById("filterPrice").addEventListener("change", filterProducts);
}

function populateTable() {
    let tableBody = document.getElementById("productTable");
    products.forEach(product => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = product.name;
        cell2.innerHTML = product.price.toFixed(2) + "€";
    });
}

function populateFilter() {
    let filter = document.getElementById("filterPrice");
    let uniquePrices = [...new Set(products.map(item => item.price))];
    uniquePrices.sort((a, b) => a - b);
    uniquePrices.forEach(price => {
        let option = document.createElement("option");
        option.value = price;
        option.textContent = price.toFixed(2) + "€";
        filter.appendChild(option);
    });
}

function filterProducts() {
    let filterValue = document.getElementById("filterPrice").value;
    let tableBody = document.getElementById("productTable");
    let rows = tableBody.rows;

    for (let i = 0; i < rows.length; i++) {
        let priceCell = rows[i].cells[1];
        let price = parseFloat(priceCell.textContent);
        if (filterValue === "All" || price <= parseFloat(filterValue)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
