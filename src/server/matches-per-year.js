// Number of matches played per year for all the years in IPL.

function matchesPerYear(matchesJsonData) {
    const size = matchesJsonData.length;
    const ans = {};

    for(let i = 0; i < size; i++) {
        const season = matchesJsonData[i].season;
        
        if(ans[season]) {
            ans[season] += 1;
        } else {
            ans[season] = 1;
        }
    }

    return ans;
}

module.exports = matchesPerYear;