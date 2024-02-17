let result = document.querySelector("p");
let win_res = document.getElementById("win-res");
let tie_res = document.getElementById("tie-res");
let lose_res = document.getElementById("lose-res");
let comp_choice = document.getElementsByClassName("computer-choice")[0];
let win = 0;
let lose = 0;
let tie = 0;
let random;
function numb() {
  random = Math.floor(Math.random() * 3);
  return arr[random];
}
let arr = ["Stone", "Paper", "Scissor"];
function Stone_func() {
  let res = numb();
  if (res === "Stone") {
    comp_choice.innerText = "Stone";
    result.innerText = "Its a tie....Try Again!!";
    tie++;
  } else if (res === "Paper") {
    comp_choice.innerText = "Paper";
    result.innerText = "You Lose.... :(";
    lose++;
  } else if (res === "Scissor") {
    comp_choice.innerText = "Scissor";
    result.innerText = "You Win.... :)";
    win++;
  }
  win_res.innerText = win;
  tie_res.innerText = tie;
  lose_res.innerText = lose;
}
function Paper_func() {
  let res = numb();
  if (res === "Stone") {
    comp_choice.innerText = "Stone";
    result.innerText = "You Win.... :)";
    win++;
  } else if (res === "Paper") {
    comp_choice.innerText = "Paper";
    result.innerText = "Its a tie....Try Again!!";
    tie++;
  } else if (res === "Scissor") {
    comp_choice.innerText = "Scissor";
    result.innerText = "You Lose.... :(";
    lose++;
  }
  win_res.innerText = win;
  tie_res.innerText = tie;
  lose_res.innerText = lose;
}
function Scissor_func() {
  let res = numb();
  if (res === "Stone") {
    comp_choice.innerText = "Stone";
    result.innerText = "You Lose.... :(";
    lose++;
  } else if (res === "Paper") {
    comp_choice.innerText = "Paper";
    result.innerText = "You Win.... :)";
    win++;
  } else if (res === "Scissor") {
    comp_choice.innerText = "Scissor";
    result.innerText = "Its a tie....Try Again!!";
    tie++;
  }
  win_res.innerText = win;
  tie_res.innerText = tie;
  lose_res.innerText = lose;
}
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  win = 0;
  lose = 0;
  tie = 0;
  result.innerText = "Result";
  win_res.innerText = "00";
  tie_res.innerText = "00";
  lose_res.innerText = "00";
});
