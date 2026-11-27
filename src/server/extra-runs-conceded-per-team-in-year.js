// Extra runs conceded per team in the year 2016

function extraRunsConcededPerTeam(matchesJsonData, deliveriesJsonData, year) {

    const ans = {};

    for(let i = 0; i < matchesJsonData.length; i++) {
        const {season} = matchesJsonData[i];

        if(season == year) {
            const matchId = matchesJsonData[i].id;

            for(let j = 0; j < deliveriesJsonData.length; j++) {
                if(matchId == deliveriesJsonData[j].match_id) {
                    const team = deliveriesJsonData[j].bowling_team;

                    const extraRuns = deliveriesJsonData[j].extra_runs;

                    if(!ans[team]) {
                        ans[team] = 0;
                    }
                    ans[team] += Number(extraRuns);
                }
            }
        }
    }

    return ans;
}

module.exports = extraRunsConcededPerTeam;