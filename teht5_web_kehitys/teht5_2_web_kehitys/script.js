function calculateSum() {
    let tuote1Value = parseFloat(document.getElementById("tuote1").value);
    let tuote2Value = parseFloat(document.getElementById("tuote2").value);

    let sum = tuote1Value + tuote2Value;

    document.getElementById("sum").textContent = sum;
}
