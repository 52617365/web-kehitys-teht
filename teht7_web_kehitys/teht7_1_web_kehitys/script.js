window.onload = function() {
    populateCarsTable();
}

function populateCarsTable() {
    const tableBody = document.getElementById('carsTable');
    cars.forEach(car => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = car.Manufacturer;
        row.insertCell(1).innerText = car.Model;
        row.insertCell(2).innerText = car.Price;
        row.insertCell(3).innerText = car.OverallQuality;
        const wikiCell = row.insertCell(4);
        const wikiLink = document.createElement('a');
        wikiLink.href = car.Wiki;
        wikiLink.innerText = 'Link';
        wikiLink.target = '_blank';
        wikiCell.appendChild(wikiLink);
    });
}
