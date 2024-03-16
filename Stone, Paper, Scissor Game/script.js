let result = document.querySelector("p");
let win_res = document.getElementById("win-res");
let tie_res = document.getElementById("tie-res");
let lose_res = document.getElementById("lose-res");
let comp_choice = document.getElementsByClassName("computer-choice")[0];
let win = localStorage.getItem("win");
let lose = localStorage.getItem("lose");
let tie = localStorage.getItem("tie");
let random;
function numb() {
  random = Math.floor(Math.random() * 3);
  return arr[random];
}
let arr = ["Stone", "Paper", "Scissor"];
function Stone_func() {
  let res = numb();
  if (res === "Stone") {
    localStorage.setItem("compChoice", "Stone");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "Its a tie....Try Again!!");
    result.innerText = localStorage.getItem("result");
    tie++;
  } else if (res === "Paper") {
    localStorage.setItem("compChoice", "Paper");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "You Lose.... :(");
    result.innerText = localStorage.getItem("result");
    lose++;
  } else if (res === "Scissor") {
    localStorage.setItem("compChoice", "Scissor");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "You Win.... :)");
    result.innerText = localStorage.getItem("result");
    win++;
  }
  localStorage.setItem("win", win);
  localStorage.setItem("tie", tie);
  localStorage.setItem("lose", lose);
  win_res.innerHTML = localStorage.getItem("win");
  tie_res.innerHTML = localStorage.getItem("tie");
  lose_res.innerHTML = localStorage.getItem("lose");
}
function Paper_func() {
  let res = numb();
  if (res === "Stone") {
    localStorage.setItem("compChoice", "Stone");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "You Win.... :)");
    result.innerText = localStorage.getItem("result");
    win++;
  } else if (res === "Paper") {
    localStorage.setItem("compChoice", "Paper");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "Its a tie....Try Again!!");
    result.innerText = localStorage.getItem("result");
    tie++;
  } else if (res === "Scissor") {
    localStorage.setItem("compChoice", "Scissor");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "You Lose.... :(");
    result.innerText = localStorage.getItem("result");
    lose++;
  }
  localStorage.setItem("win", win);
  localStorage.setItem("tie", tie);
  localStorage.setItem("lose", lose);
  win_res.innerHTML = localStorage.getItem("win");
  tie_res.innerHTML = localStorage.getItem("tie");
  lose_res.innerHTML = localStorage.getItem("lose");
  console.log(localStorage.getItem("win"));
}
function Scissor_func() {
  let res = numb();
  if (res === "Stone") {
    localStorage.setItem("compChoice", "Stone");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "You Lose.... :(");
    result.innerText = localStorage.getItem("result");
    lose++;
  } else if (res === "Paper") {
    localStorage.setItem("compChoice", "Paper");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "You Win.... :)");
    result.innerText = localStorage.getItem("result");
    win++;
  } else if (res === "Scissor") {
    localStorage.setItem("compChoice", "Scissor");
    comp_choice.innerText = localStorage.getItem("compChoice");
    localStorage.setItem("result", "Its a tie....Try Again!!");
    result.innerText = localStorage.getItem("result");
    tie++;
  }
  localStorage.setItem("win", win);
  localStorage.setItem("tie", tie);
  localStorage.setItem("lose", lose);
  win_res.innerHTML = localStorage.getItem("win");
  tie_res.innerHTML = localStorage.getItem("tie");
  lose_res.innerHTML = localStorage.getItem("lose");
  console.log(localStorage.getItem("win"));
}
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  win = 0;
  lose = 0;
  tie = 0;
  result.innerText = "Result";
  comp_choice.innerHTML = "";
  win_res.innerText = "00";
  tie_res.innerText = "00";
  lose_res.innerText = "00";
});
result.innerText = localStorage.getItem("result");
win_res.innerHTML = localStorage.getItem("win");
tie_res.innerHTML = localStorage.getItem("tie");
lose_res.innerHTML = localStorage.getItem("lose");
comp_choice.innerHTML = localStorage.getItem("compChoice");
