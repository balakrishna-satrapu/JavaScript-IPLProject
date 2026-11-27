// Number of matches won per team per year in IPL.

function matchesWonPerTeamPerYear(matchesJsonData) {

    const ans = {};

    const size = matchesJsonData.length;

    for(let i = 0; i < size; i++) {
        const {season, winner} = matchesJsonData[i];
        if(ans[season]) {
            if(ans[season][winner]) {
                ans[season][winner] += 1;
            } else {
                ans[season][winner] = 1;
            }
        } else {
            ans[season] = {};
            ans[season][winner] = 1;
        }
    }

    return ans;
}

module.exports = matchesWonPerTeamPerYear;
