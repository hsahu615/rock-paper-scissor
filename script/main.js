let play=0, pc=0;

function computer(){
  let a = ["rock", "paper", "scissor"];
  let i = (Math.floor(Math.random()*10)%3);
  return a[i];
}
function player(){
  let mySelection = prompt("Please enter your option: ");
  mySelection = mySelection.toLowerCase();
  return mySelection;  
}

function round(a, b){
  if(a==b){
    console.log("It's a Tie");
    play++;
    pc++;
  }
  else if(a=="rock"){
    if(b=="paper"){
      console.log("You lose! Paper beats Rock");
      pc++;
    }
    else{
      console.log("You won! Rock beats Scissor");
      play++;
    }
  }
  else if(a=="paper"){
    if(b=="rock"){
      console.log("You Won! Paper beats Rock");
      play++;
    }
    else{
      console.log("You lose! Scissor beats Paper");
      pc++;
    }
  }
  else{
    if(b=="paper"){
      console.log("You Won! Scissor beats Paper");
      play++;
    }
    else{
      console.log("You Lose! Rock beats Scissor");
      pc++;
    }
  }
}


function game(){
  play=0;
  pc = 0;
  for(let i=0;i<5;i++){
    round(player(), computer());
  }
  if(play==pc){
    console.log("It's a tie");
  }
  else if(play<pc){
    console.log("You Lose! Better luck next time");
  }
  else{
    console.log("You Won, Congrats!");
  }
  let again = prompt("Wanna play again");
  if(again=="yes"){
    game();
  }
  else{
    
  }
}

// game();  