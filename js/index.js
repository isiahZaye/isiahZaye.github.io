const bot = ["odd", "even", "odd", "even"];
let time = 3;
let gameCountdown = document.getElementById("gamecountdown")

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

    gameCountdown.innerHTML += `<div class="gamecountdown">${time}</div>`
    time --

  }

}
console.log(gamecountdown)
