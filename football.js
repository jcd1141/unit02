//Joshua Dalton
//IT 505
//Football game simulator


let teamAScore = 0;
let teamBScore = 0;

let drivesA = 10;
let drivesB = 10;

while(drivesA!= 0 && drivesB!=0){
    let currentDrive = 1;

    let outcome = Math.floor(Math.random() * 3) + 1;

    if(outcome == 1){
        teamAScore += 7;
        console.log("Team A Drive " + currentDrive + ":" + " Scored a touchdown");
    }
    else if(outcome == 2){
        teamAScore += 3;
        console.log("Team A Drive " + currentDrive + ":" + "Scored a field goal");
    }
    else{
        teamAScore += 0;
        console.log("Team A Drive " + currentDrive + ":" + "Punted");
    }
    drivesA--;

    let outcomeB = Math.floor(Math.random() * 3) + 1;
    if(outcomeB == 1){
        teamBScore += 7;
    }
    else if(outcomeB == 2){
        teamBScore += 3;
    }
    else{
        teamBScore += 0;
    }
    drivesB--;

    currentDrive++;
}

console.log(teamAScore + " to " + teamBScore);
