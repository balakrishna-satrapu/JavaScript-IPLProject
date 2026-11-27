const fs = require("fs");
const path = require("path");

const matchesCSV = fs.readFileSync(path.join(__dirname, "../data/matches.csv"), "utf-8");

const matchesRows = matchesCSV.trim().split("\n");

const matchesHeaders = matchesRows[0].split(",");

const matchesJsonData = [];

for(let i = 1; i < matchesRows.length; i++) {
    const values = matchesRows[i].split(",");

    const matchObj = {};

    for(let j = 0; j < matchesHeaders.length; j++) {
        matchObj[matchesHeaders[j]] = values[j];
    }

    matchesJsonData.push(matchObj);
}

module.exports = matchesJsonData;