const matchesJsonData = require("./utils/matches.js");

const deliveriesJsonData = require("./utils/deliveries.js");

const matchesPerYear = require("./server/matches-per-year.js");

const matchesWonPerTeamPerYear = require("./server/matches-won-per-team-per-year.js");

const extraRunsConcededPerTeam = require("./server/extra-runs-conceded-per-team-in-year.js");

const economicalBowlers = require("./server/top10-economical-bowlers.js");

function displayData(message, data) {
    console.log(message);
    console.log("");
    console.log(data);
    console.log("");
}

displayData("Number of matches played per year for all the years in IPL", matchesPerYear(matchesJsonData));

displayData("Number of matches won per team per year in IPL", matchesWonPerTeamPerYear(matchesJsonData));

displayData("Extra runs conceded per team in the year 2016", extraRunsConcededPerTeam(matchesJsonData, deliveriesJsonData, 2016));

displayData("Top 10 economical bowlers in the year 2015", economicalBowlers(matchesJsonData, deliveriesJsonData, 2015, 10));