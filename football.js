//Joshua Dalton
//IT 505
//Football game simulator

/*
Running football.js will give a simulation
of a football game with each team getting the 
same amount of drives and random chances to 
score.
*/

let teamAScore = 0;
let teamBScore = 0;

let drivesA = 10;
let drivesB = 10;
let currentDrive = 1;

let qbA = 0;
let qbB = 0;

let rbA = 0;
let rbB = 0;

let kickerATries = 0;
let kickerAMakes = 0;
let kickerBTries = 0;
let kickerBMakes = 0;

//game
while(drivesA!= 0 && drivesB!=0){

    //drive outcomes, 1 = TD, 2 = FG, 3 = punt
    let outcome = Math.floor(Math.random() * 3) + 1;

    if(outcome == 1){
        teamAScore += 7;
        let tdA = Math.floor(Math.random() * 2) + 1;
        if(tdA == 1){
            console.log("Team A Drive " + currentDrive + ": Scored a rushing touchdown");
            rbA +=1;
        }
        else{
            console.log("Team A Drive " + currentDrive + ": Scored a passing touchdown");
            qbA += 1;
        }
    }

    else if(outcome == 2){
        let fgA = Math.floor(Math.random() * 5) + 1;
        if(fgA<=4){
            console.log("Team A Drive " + currentDrive + ": Scored a field goal");
            teamAScore += 3;
            kickerATries +=1;
            kickerAMakes +=1;
        }
        else{
            console.log("Team A Drive " + currentDrive + ": Missed a field goal");
            teamAScore += 0;
            kickerATries +=1;
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
            rbB +=1;
        }
        else{
            console.log("Team B Drive " + currentDrive + ": Scored a passing touchdown");
            qbB+= 1;
        }
    }

    else if(outcomeB == 2){
        let fgB = Math.floor(Math.random() * 5) + 1;
        if(fgB<=4){
            console.log("Team B Drive " + currentDrive + ": Scored a field goal")
            teamBScore +=3;
            kickerBTries +=1;
            kickerBMakes +=1;
        }
        else{
            console.log("Team B Drive " + currentDrive + ": Missed a field goal")
            teamBScore += 0;
            kickerBTries +=1;
        }
    }
    else{
        teamBScore += 0;
        console.log("Team B Drive " + currentDrive + ": Punted");
    }
    drivesB--;

    currentDrive++;
}

//results
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

//stats
console.log("=======Stats=======");
console.log("QB A " + qbA + " TDs");
console.log("QB B " + qbB + " TDs");

console.log("RB A " + rbA + " TDs");
console.log("RB B " + rbB + " TDs");

console.log("Kicker A went " + kickerAMakes + "/" + kickerATries);
console.log("Kicker B went " + kickerBMakes + "/" + kickerBTries);