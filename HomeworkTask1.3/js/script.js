const cripto = {
    bitcoin: {
        usd: 57882,
        rub: 5114050
    },
    ethereum: {
        usd: 3093.16,
        rub: 273291
    },
    lightcoin: {
        usd: 0.00023174,
        rub: 0.02047386
    },
    monero: {
        usd: 158.42,
        rub: 13996.6
    },
    tether: {
        usd: 0.998946,
        rub: 88.26
    },
    tron: {
        usd: 0.133144,
        rub: 11.76
    },
};

let table = document.createElement('table');
let headerRow = table.insertRow();
let cell1 = headerRow.insertCell();
let cell2 = headerRow.insertCell();
let cell3 = headerRow.insertCell();

cell1.innerHTML = 'TYPE';
cell2.innerHTML = 'USD';
cell3.innerHTML = 'RUB';

for (let key in cripto) {
    let row = table.insertRow();
    let typeCell = row.insertCell();
    let usdCell = row.insertCell();
    let rubCell = row.insertCell();

    typeCell.innerHTML = key;
    usdCell.innerHTML = cripto[key].usd;
    rubCell.innerHTML = cripto[key].rub;
}

document.body.appendChild(table);

console.log(Object.keys(cripto).length);
