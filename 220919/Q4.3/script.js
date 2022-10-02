// function to handle average, for any number of games in array
function average (team,gamesCount) {
    let total = 0;
    for (let i = 0; i<team.length; i++){
        total += team[i];
    }
    return total/gamesCount;
}
// function to arrange all averages and player names organized in array
// like this [ 'John ', 104, 'Mike ', 111, 'Mary ', 112 ]
function scoresArray(nameArr,scoreArr) {
    let arr = [];
    for(let j=0;j < nameArr.length ; j++){
        arr[2 * j]=nameArr[j];
        arr[2 * j + 1] = average(scoreArr[j],scoreArr[j].length)
    }
    return arr;
}
//Function to figur out who is the winner or winners and announce it (return the final print)
//including options to 1 winner, a tie, a triple tie, even 32 players tie...
//just add as many players and as many game scores you want.
function whosTheWinner (allTeamArr) {
    //initial list
    let winnerList = [0,0];
    //winnerlist Length
    let winLength = winnerList.length;
    //default number of winner - for tie it will grow
    let winnersNumber = 1;
    for(let k=0; k < allTeamArr.length / 2 ; k++) {
        if ((allTeamArr[2 * k + 1] === winnerList[(winnerList.length - 1)]) && (winnerList[(winnerList.length - 1)] > 0)){
            //this IF is to make sure we don't just add to the list Zero's
            //only if we find a tie, we add to the winner list
            winnerList[winnerList.length] = allTeamArr[2 * k];
            winnerList[winnerList.length] = allTeamArr[2 * k +1];
            winnersNumber++;
            winLength = winnerList.length;
        } else if ((allTeamArr[2 * k + 1] > winnerList[winnerList.length - 1]) && winnersNumber === 1 ) {
            // This IF will change the initial winnerList value - Has winner, bigger score
            winnerList[0] = allTeamArr[2 * k];
            winnerList[1] = allTeamArr[2 * k + 1]
        } else if ((allTeamArr[2 * k + 1] > winnerList [k + 1]) && winnersNumber > 1 ) {
            // This IF will change the initial winnerList value - Was a tie - New winner bigger then tie score
            // bigger then the tie score so initialize winnerList to contain one winner only
            winnerList = [0,0]
            winnerList[0] = allTeamArr[2 * k];
            winnerList[1] = allTeamArr[2 * k + 1]
        }
    }
    //FINALLY - The winner/winners announcment!
    let names=[];
    for (let l =0; l< (winnerList.length / 2); l++) {
        names[l] = winnerList[2 * l];
    }
    if (names.length === 1){
        return (`The winner is: ${names[0]}with an avrage score of ${winnerList[1].toFixed(2)}`);
    }else{
        return (`The winners are: ${names}with a average score of ${winnerList[1].toFixed(2)}.`);
    }
}
//John,Mike - All scores as array
let john = [89,120,103];
let mike = [116,94,123];
// players - all players all gemes array
let players = [john,mike]; // like [ [ 89, 120, 103 ], [ 116, 94, 123 ] ]
// playerlist - list of player names
let playersList = ["John ","Mike "];
console.log("John and Mike:");
console.log(whosTheWinner(scoresArray(playersList,players)));

// -------- With mary
let mary = [97,134,105];
players = [john,mike,mary]; // like [ [ 89, 120, 103 ], [ 116, 94, 123 ], [ 97, 134, 105 ] ]
playersList = ["John ","Mike ","Mary "];
console.log("John Mike and Mary:");
console.log(whosTheWinner(scoresArray(playersList,players)));