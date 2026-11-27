const fs = require("fs");
const path = require("path");

const deliveriesCSV = fs.readFileSync(path.join(__dirname, "../data/deliveries.csv"), "utf-8");

const deliveriesRows = deliveriesCSV.trim().split("\n");

const deliveriesHeaders = deliveriesRows[0].split(",");

const deliveriesJsonData = [];

for(let i = 1; i < deliveriesRows.length; i++) {
    const values = deliveriesRows[i].split(",");

    const deliveryObj = {};

    for(let j = 0; j < deliveriesHeaders.length; j++) {
        deliveryObj[deliveriesHeaders[j]] = values[j];
    }

    deliveriesJsonData.push(deliveryObj);
}

module.exports = deliveriesJsonData;