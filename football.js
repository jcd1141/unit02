//Joshua Dalton
//IT 505
//Football game simulator


let teamAScore = 0;
let teamBScore = 0;

let drivesA = 10;
let drivesB = 10;
let currentDrive = 1;

//game
while(drivesA!= 0 && drivesB!=0){

    //drive outcomes, 1 = TD, 2 = FG, 3 = punt
    let outcome = Math.floor(Math.random() * 3) + 1;

    if(outcome == 1){
        teamAScore += 7;
        let tdA = Math.floor(Math.random() * 2) + 1;
        if(tdA == 1){
            console.log("Team A Drive " + currentDrive + ": Scored a rushing touchdown");
        }
        else{
            console.log("Team A Drive " + currentDrive + ": Scored a passing touchdown");
        }
    }
    else if(outcome == 2){
        let fgA = Math.floor(Math.random() * 5) + 1;
        if(fgA<=4){
            console.log("Team A Drive " + currentDrive + ": Scored a field goal");
            teamAScore += 3;
        }
        else{
            console.log("Team A Drive " + currentDrive + ": Missed a field goal");
            teamAScore += 0;
        }
    }
    else{
        teamAScore += 0;
        console.log("Team A Drive " + currentDrive + ": Punted");
    }
    drivesA--;

    let outcomeB = Math.floor(Math.random() * 3) + 1;
    if(outcomeB == 1){
        teamBScore += 7;
        let tdB = Math.floor(Math.random() * 2) + 1;
        if(tdB == 1){
            console.log("Team B Drive " + currentDrive + ": Scored a rushing touchdown");
        }
        else{
            console.log("Team B Drive " + currentDrive + ": Scored a passing touchdown");
        }
    }
    else if(outcomeB == 2){
        let fgB = Math.floor(Math.random() * 5) + 1;
        if(fgB<=4){
            console.log("Team B Drive " + currentDrive + ": Scored a field goal")
            teamBScore +=3;
        }
        else{
            console.log("Team B Drive " + currentDrive + ": Missed a field goal")
            teamBScore += 0;
        }
    }
    else{
        teamBScore += 0;
        console.log("Team B Drive " + currentDrive + ":" + " Punted");
    }
    drivesB--;

    currentDrive++;
}

console.log("Team A: " + teamAScore + " to Team B: " + teamBScore);
if(teamAScore>teamBScore){
    console.log("Team A Wins!");
}
else if(teamAScore<teamBScore){
    console.log("Team B Wins!")
}
else{
    console.log("It's a tie.")
}