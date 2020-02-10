const bot = ["odd", "even", "odd", "even"];
let time = 3;
// let gameCountdown = document.getElementById("gamecountdown");


class Players{
  constructor(){
    this.odd = "odd",
    this.even = "even"

  }
};

let player1 = new Players()
let player2 = new Players()



const play = () => {
  while (time > 0) {


    time --

  }

}


let i = bot[point(bot)]
console.log(i);

function point (bot) {
  answer = Math.floor(Math.random() * bot.length);
  return answer;
}
