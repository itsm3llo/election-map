//Create politician candidates
var createPolitician = function(name, color)
{
    var politician = {};
    politician.name = name;
    politician.color = color;
    politician.electionResults= null;
    politician.totalVotes= 0;

    politician.announcePolitician = function()
    {
      console.log("I believe that " + this.name + ", is ready for a win!");
    };

    politician.announcePolitician();

    return politician;
};
 var hillaryClinton = createPolitician("Hillary Clinton", [132, 17, 11]);
 var michelleObama = createPolitician("Michelle Obama", [245, 141, 136]);

console.log("Hillary has the color " + hillaryClinton.color);
console.log("Michelle has the color " + michelleObama.color);

//State election results
hillaryClinton.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

michelleObama.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//Election results adjusted
hillaryClinton.electionResults[9] = 1;
michelleObama.electionResults[9] = 28;

hillaryClinton.electionResults[4] = 17;
michelleObama.electionResults[4] = 38;

hillaryClinton.electionResults[43] = 11;
michelleObama.electionResults[43] = 27;

console.log(hillaryClinton.electionResults);
console.log(michelleObama.electionResults);

//Tally votes/state results
var winner = null;

var setStateResults = function(state) {
    theStates[state].winner = null;

    if (hillaryClinton.electionResults[state] > michelleObama.electionResults[state]){
   theStates[state].winner = hillaryClinton;
   }else if (michelleObama.electionResults[state] > hillaryClinton.electionResults[state]){
   theStates[state].winner = michelleObama;
   }

  var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.color;
    }else {
      theStates[state].rgbColor = [11, 32, 57];
    }

//state results in table
var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];
var body = stateInfoTable.children[1];
var candidate1Name = body.children[0].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Name = body.children[1].children[0];
var candidate2Results = body.children[1].children[1];
var stateWinner = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = theStates[state].nameAbbrev
candidate1Name.innerText = hillaryClinton.name;
candidate1Results.innerText = hillaryClinton.electionResults[state];
candidate2Name.innerText = michelleObama.name;
candidate2Results.innerText = michelleObama.electionResults[state];

 if (theStates[state].winner === null){
   stateWinner.innerText = "Tie";
 }
 else
 {
   stateWinner.innerText = theStates[state].winner.name;
 }

};

hillaryClinton.totalVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
       this.totalVotes = this.totalVotes + this.electionResults[i];
     }
       console.log(this.totalVotes);
};

hillaryClinton.totalVotes();


michelleObama.totalVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
       this.totalVotes = this.totalVotes + this.electionResults[i];
     }
       console.log(this.totalVotes);
};

michelleObama.totalVotes();

//Declare the winner

var winner;

if (hillaryClinton.totalVotes > michelleObama.totalVotes)
{
  winner = "Hillary Clinton";
  console.log("Hillary Clinton has won the election with a total of " + hillaryClinton.totalVotes + " votes!");
}
else if (michelleObama.totalVotes > hillaryClinton.totalVotes)
{
  winner = "Michelle Obama";
  console.log("Michelle Obama is the winner with a total of " + michelleObama.totalVotes + " votes!");
}
else
  {
    winner = "Wow! It's a tie!"
    console.log("This election is a draw! Both candidates have a total of " + hillaryClinton.totalVotes + " votes!");
}

//country results
var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];

row.children[0].innerText = "Hillary Clinton";
row.children[1].innerText = hillaryClinton.totalVotes;
row.children[2].innerText = "Michelle Obama";
row.children[3].innerText = michelleObama.totalVotes;
row.children[5].innerText = winner;
