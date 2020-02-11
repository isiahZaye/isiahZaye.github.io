class Players{
  constructor(odd, even){
    this.odd = "odd",
    this.even = "even";
    this.choice;

  }

  setChoice(choice) {
    if(choice === "odd")
    {
      this.choice = this.odd;
    }
    else {
      this.choice = this.even;
    }

  }
};


const bot = ["odd", "even", "odd", "even"];
let time = 3;
let player1 = new Players();
let player2 = new Players();
let player1Turn = true;


let playerRight = false;
function userChooseRight() {
  playerRight = true;
}
function youLooseFunction(){
  if(playerRight){
  console.log("you're right");
  } else {
    console.log("you loose");
  }
  rounds++
}
//round start
console.log("you have 3 seconds to choose");
setTimeout(function(){ youLooseFunction(); }, 3000);
userChooseRight();


function playerPressedOdd(){

  if(player1Turn)
  {
    player1.setChoice("odd");
  }
  else {
    player2.setChoice("odd");
  }

}

function playerPressedEven(){

  if(player1Turn)
  {
    player1.setChoice("even");
  }
  else {
    player2.setChoice("even");
  }

}






let i = bot[score(bot)]
console.log(i);

function score (bot) {
  randomNumber = Math.floor(Math.random() * bot.length);
  let answer;

  if(randomNumber % 2 == 0)
  {
    answer = "even";
  }
  else {
    answer = "odd";
  }

  return answer;
};

let p1 = [];
let p2 = [];


let rounds = 0;

// Test loop (can delete if you want)
function playerChoice(choice) {

}

for (let i = 0; i < 5; i++) {
  pointSystem();
}

function pointSystem() {


  let computerAnswer = score(bot);


  playerPressedOdd();

  console.log(`"player1 choice is: ${player1.choice} and computerAnswer is: ${computerAnswer}"`);

  if ( player1.choice === computerAnswer ) {
    console.log("player got the right answer: ") ;
    p1.push('pt')
  }
  else{
    console.log('player1 got the incorrect answer')
  }

  player1Turn = false;

  console.log("p1 array is: " + p1) ;
  console.log("p2 array is: " + p2) ;


}
console.log(rounds);

  $( "#od" ).click(function() {
  ///alert( "square1" );
    console.log("player pressed odd button");
  });

  $( "#ev" ).click(function() {
    ///alert( "square1" );
      console.log("player pressed even button");
    });
// console.log(p1);
