// Top 10 economical bowlers in the year 2015

function economicalBowlers(matchesJsonData, deliveriesJsonData, year, k) {

    let ans = {};

    for(let i = 0; i < matchesJsonData.length; i++) {
        let {season} = matchesJsonData[i];

        if(season == year) {
            const matchId = matchesJsonData[i].id;

            for(let j = 0; j < deliveriesJsonData.length; j++) {
                if(matchId == deliveriesJsonData[j].match_id) {
                    const bowler = deliveriesJsonData[j].bowler;

                    const runs = Number(deliveriesJsonData[j].wide_runs) + Number(deliveriesJsonData[j].noball_runs) + Number(deliveriesJsonData[j].batsman_runs);
                    
                    const ball = (deliveriesJsonData[j].wide_runs > 0 || deliveriesJsonData[j].noball_runs > 0) ? 0 : 1;

                    if(ans[bowler]) {
                        ans[bowler][0] += runs;
                        ans[bowler][1] += ball;
                    } else {
                        ans[bowler] = [];
                        ans[bowler][0] = runs;
                        ans[bowler][1] = ball;
                    }
                }
            }
        }
    }


    const bowlerEconomy = [];

    for(const [bowler, value] of Object.entries(ans)) {
        bowlerEconomy.push([bowler, Number((6.0 * (value[0] / value[1])).toFixed(2))]);
    }

    bowlerEconomy.sort((a1, a2) => {
        return (a1[1] - a2[1]);
    });
    
    const bowlerEconomyObj = {};

    for(let i = 0; i < k; i++) {
        bowlerEconomyObj[bowlerEconomy[i][0]] = bowlerEconomy[i][1];
    }

    return bowlerEconomyObj;
}

module.exports = economicalBowlers;