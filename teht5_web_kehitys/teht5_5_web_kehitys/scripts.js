function calculateDifference() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);

    const differenceInMs = Math.abs(date2 - date1);

    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerText = "Erotus on: " + differenceInDays + " päivää";
}
