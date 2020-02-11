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

let showChoice = () =>{
  document.getElementById('choice').innerHTML = player1.choice
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
  console.log(answer)
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

  document.getElementById('p1choice').innerText =`player1 choice is: ` + player1.choice ;
document.getElementById('p2choice').innerText =`player2 choice is: ` + computerAnswer;

if ( player1.choice === computerAnswer ) {
document.getElementById('result').innerText ="player with the most points won " ;
  p1.push('pt')
}



else{
document.getElementById('result').innerText =('player1 got the incorrect answer')
  p2.push('pt');
}

  player1Turn = false;

    document.getElementById('p1points').innerText ="p1 : " + p1 ;
    document.getElementById('p2points').innerText ="p2 : " + p2 ;


}
console.log(rounds);

  $( "#od" ).click(function() {
  ///alert( "square1" );
  playerPressedOdd();
  showChoice();

    console.log("player pressed odd button");
  });

  $( "#ev" ).click(function() {
    showChoice();
    ///alert( "square1" );
      console.log("player pressed even button");
    });
// // console.log(p1);
