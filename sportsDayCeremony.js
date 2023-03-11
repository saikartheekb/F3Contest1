let score = {}; // starting scores

function OpeningCeremony(score, nextSport){
    score = {red:0, blue:0, green:0, yellow:0}; // starting scores
    console.log(`Scores initialised:`, score);
    setTimeout(() => {
        console.log("Let's the game begin!");
        nextSport(score, LongJump);
    }, 1000);
}

function Race100M(score, nextSport){
    setTimeout(() => {

        const raceObj = {
            red: Math.floor(Math.random() * 6) + 10,
            blue:  Math.floor(Math.random() * 6) + 10,
            green:  Math.floor(Math.random() * 6) + 10,
            yellow:  Math.floor(Math.random() * 6) + 10
        };
        const rankArr = Object.keys(raceObj).sort((a, b) => raceObj[a] - raceObj[b]);
        console.log("Winner of 100M race is " + rankArr[0]);

        score[rankArr[0]] += 50;
        score[rankArr[1]] += 25;

        console.log(`Score after Race100M event:`, score);
        nextSport(score, HighJump);

    }, 3000);
}

function LongJump(score, nextSport){
    setTimeout(() => {
        const i = Math.floor(Math.random() * 4) + 1;
        switch (i) {
            case 1:
                score.red += 150;
                break;
            case 2:
                score.blue += 150;
                break;
            case 3:
                score.green += 150;
                break;
            case 4:
                score.yellow += 150;
                break;
        }
        console.log(`Score after LongJump event:`, score);
        nextSport(score, AwardCeremony);
    }, 2000);
}

function HighJump(score, nextFunction){
    let person = prompt("Please enter the colour:");
    let isEventCancelled = false;
    switch (person) {
        case "red":
            score.red += 150;
            break;
        case "blue":
            score.blue += 150;
            break;
        case "green":
            score.green += 150;
            break;
        case "yellow":
            score.yellow += 150;
            break;
        default:
            console.log("Event was cancelled");
            isEventCancelled = true;
    }
    if(!isEventCancelled) {
        console.log(`Score after HighJump event:`, score);
    }
    nextFunction(score);
}

function AwardCeremony(score){

    let rankArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    let n = rankArr.length;

    console.log(`${rankArr[n-1]} came first with ${score[rankArr[n-1]]} points`);
    console.log(`${rankArr[n-2]} came second with ${score[rankArr[n-2]]} points`);
    console.log(`${rankArr[n-3]} came third with ${score[rankArr[n-3]]} points`);
}

OpeningCeremony(score, Race100M);
