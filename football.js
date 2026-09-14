//Joshua Dalton
//IT 505
//Football game simulator


let teamAScore = 0;
let teamBScore = 0;

let drivesA = 6;
let drivesB = 6;
let currentDrive = 1;

while(drivesA!= 0 && drivesB!=0){

    let outcome = Math.floor(Math.random() * 3) + 1;

    if(outcome == 1){
        teamAScore += 7;
        console.log("Team A Drive " + currentDrive + ":" + " Scored a touchdown");
    }
    else if(outcome == 2){
        teamAScore += 3;
        console.log("Team A Drive " + currentDrive + ":" + " Scored a field goal");
    }
    else{
        teamAScore += 0;
        console.log("Team A Drive " + currentDrive + ":" + " Punted");
    }
    drivesA--;

    let outcomeB = Math.floor(Math.random() * 3) + 1;
    if(outcomeB == 1){
        teamBScore += 7;
        console.log("Team B Drive " + currentDrive + ":" + " Scored a touchdown");
    }
    else if(outcomeB == 2){
        teamBScore += 3;
        console.log("Team B Drive " + currentDrive + ":" + " Scored a field goal");
    }
    else{
        teamBScore += 0;
        console.log("Team B Drive " + currentDrive + ":" + " Punted");
    }
    drivesB--;

    currentDrive++;
}

console.log(teamAScore + " to " + teamBScore);
