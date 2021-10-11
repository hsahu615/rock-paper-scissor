let play=0, pc=0;
let sta;

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
    sta = "It's a tie";
    play++;
    pc++;
  }
  else if(a=="rock"){
    if(b=="paper"){
      sta = "You Lose";
      pc++;
    }
    else{
      sta = "You Won";
      play++;
    }
  }
  else if(a=="paper"){
    if(b=="rock"){
      sta = "You Won";
      play++;
    }
    else{
      sta = "You Lose";
      pc++;
    }
  }
  else{
    if(b=="paper"){
      sta = "You Won";
      play++;
    }
    else{
      sta = "You Lose";
      pc++;
    }
  }
}


function game(){
  play=0;
  pc = 0;

  let table = document.getElementById("entries");
  table.style.display = "block";
  table.style.backgroundColor = "white";

  for(let i=0;i<5;i++){
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    setTimeout(round(player(), computer()), 1);

    cell1.innerHTML = i+1;
    cell2.innerHTML = sta;
    cell3.innerHTML = play;
    cell4.innerHTML = pc;
  }


  let result;


  if(play==pc){
    result="Tie";
  }
  else if(play<pc){
    result = "You Lose"
  }
  else{
    result = "You Won"
  }
  let again = prompt("Wanna play again");
  if(again=="yes"){
    game();
  }
  else{
  }

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = "Final";
  cell2.innerHTML = result;
  cell3.innerHTML = "-";
  cell4.innerHTML = "-";
}
