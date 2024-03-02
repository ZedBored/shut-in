const noti = document.getElementById("noti");
let diapc = document.querySelector(".pc");
let lay = document.getElementById("lay");
let pc = document.getElementById("pc");

let hr = 7;
let min = 0;
let days = 0;

let hunger = 100;
let sleep = 100;
let money = 100;

let surveyCounter = 0;
let lotteryCounter = 0;
let freelanceCounter = 0;

let death = 5;

let bad;

let name = "Player";
// name = prompt(
//   "What is your name?(Please enter a name less than 30 Characters)"
// );

// while (name == null || name == "" || name.length > 30) {
//   name = prompt(
//     "What is your name?(Please enter a name less than 30 Characters)"
//   );
// }

// Creating a notification that the user has logged in
let p = document.createElement("span");
p.appendChild(document.createTextNode(`${name} has logged in`));
noti.appendChild(p);
timeout(p);

// Updating the STATS
const interval = setInterval(update, 1000);

// Open & Close all the dialog fields
//                      bed
lay.addEventListener("click", () => {
  document.querySelector(".bed").open = true;
  pc.disabled = true;
});
document.getElementById("getof").addEventListener("click", () => {
  document.querySelector(".bed").open = false;
  pc.disabled = false;
});
//                        pc
pc.addEventListener("click", () => {
  diapc.open = true;
  lay.disabled = true;
});
document.getElementById("turnof").addEventListener("click", () => {
  diapc.open = false;
  lay.disabled = false;
});
//                       food
document.getElementById("food").addEventListener("click", () => {
  diapc.open = false;
  pc.disabled = true;
  document.querySelector(".food").open = true;
});
document.getElementById("close2").addEventListener("click", () => {
  diapc.open = true;
  pc.disabled = false;
  document.querySelector(".food").open = false;
});
//                       earn
document.getElementById("earn").addEventListener("click", () => {
  diapc.open = false;
  pc.disabled = true;
  document.querySelector(".earn").open = true;
});
document.getElementById("close3").addEventListener("click", () => {
  diapc.open = true;
  pc.disabled = false;
  document.querySelector(".earn").open = false;
});

// dialog button work
document.getElementById("nap").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (sleep >= 93) {
    p.innerText = `${name} is not feeling sleepy.`;
  } else if (sleep >= 84) {
    min += 30;
    sleep += 5;
    hunger -= 1.05;
    p.innerText = `${name} took a quick 30 min nap for no reason.`;
    p.style.color = "green";
  } else if (sleep >= 60) {
    hr += 1;
    sleep += 10;
    hunger -= 2;
    p.innerText = `${name} took a quick 1 hour nap.`;
    p.style.color = "green";
  } else if (sleep >= 40) {
    hr += 1;
    min += 30;
    sleep += 10;
    hunger -= 4;
    p.innerText = `${name} took a quick 1 hr 30 min nap because he was tired.`;
    p.style.color = "green";
  } else {
    hr += 9;
    sleep += 40;
    hunger -= 10;
    p.innerText = `${name} tried to take a nap but fell asleep for 9 hours.`;
    p.style.color = "green";
  }
  noti.insertAdjacentElement("afterbegin", p);
});

//                       dialog sleep
document.getElementById("sleep").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (sleep >= 90) {
    p.innerText = `${name} is not feeling sleepy.`;
  } else if (sleep >= 80) {
    min += 30;
    hunger -= 2;
    p.innerText = `${name} was not feeling sleepy and they wasted 30 minutes on bed.`;
    p.style.color = "green";
  } else if (sleep >= 60) {
    hr += 2;
    sleep += 5;
    hunger -= 5;
    p.innerText = `${name} tried to sleep but was not able to and woke up in 2 hours.`;
    p.style.color = "green";
  } else if (sleep >= 35) {
    hr += 7;
    sleep += 30;
    hunger -= 7;
    p.innerText = `${name} tried to sleep and fell asleep for 7 hours.`;
    p.style.color = "green";
  } else {
    hr += 8;
    sleep += 40;
    hunger -= 10;
    p.innerText = `${name} tried to sleep while he was tired and fell asleep for 8 hours.`;
    p.style.color = "green";
  }
  noti.insertAdjacentElement("afterbegin", p);
});

//                         dialog food
document.getElementById("small").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (hunger <= 95) {
    if (money >= 10) {
      money -= 10;
      hunger += 8;
      p.innerText = `${name} ordered and ate a small meal.`;
      p.style.color = "green";
    } else {
      p.innerText = `${name} dosen't have enough money to buy the meal.`;
      p.style.color = "red";
    }
    noti.insertAdjacentElement("afterbegin", p);
  } else {
    p.innerText = `${name} dosen't feel like having a meal.`;
  }
  noti.insertAdjacentElement("afterbegin", p);
});
document.getElementById("normal").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (hunger <= 90) {
    if (money >= 20) {
      money -= 20;
      hunger += 14;
      p.innerText = `${name} ordered and ate a normal meal.`;
      p.style.color = "green";
    } else {
      p.innerText = `${name} dosen't have enough money to buy the meal.`;
      p.style.color = "red";
    }
  } else {
    p.innerText = `${name} dosen't feel like having a meal.`;
  }
  noti.insertAdjacentElement("afterbegin", p);
});
document.getElementById("large").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (hunger <= 85) {
    if (money >= 40) {
      money -= 40;
      hunger += 20;
      p.innerText = `${name} ordered and ate a large meal.`;
      p.style.color = "green";
    } else {
      p.innerText = `${name} dosen't have enough money to buy the meal.`;
      p.style.color = "red";
    }
  } else {
    p.innerText = `${name} dosen't feel like having a meal.`;
  }
  noti.insertAdjacentElement("afterbegin", p);
});

//                   earn dialog
//                 lottery
document.getElementById("lot").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (lotteryCounter == 0) {
    lotteryCounter = 1;
    let x = getrand(1, 10);
    let y = getrand(1, 10);
    let z = getrand(1, 10);
    money -= 8;
    if ((x == y) == z) {
      p.innerText = `${name} won a lottery and got $${x * 1000}`;
      money += x * 1000;
      p.style.color = "green";
    } else if (x == y || x == z || y == z) {
      p.innerText = `${name} won a lottery and got $${x * 10}`;
      money += x * 10;
      p.style.color = "green";
    } else {
      p.innerText = `${name} got nothing from the lottery, better luck next time.`;
      p.style.color = "green";
    }
  } else {
    p.innerText = `${name} can only buy ticket every 24 hours.`;
    p.style.color = "red";
  }
  noti.insertAdjacentElement("afterbegin", p);
});
//                             survey
document.getElementById("sur").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  // min += 10;
  if (surveyCounter == 0) {
    surveyCounter = 1;
    let s = Math.floor(Math.random() * 10);
    if (s == 2) {
      money += 2;
      p.innerText = `${name} got $2 from the survey.`;
      p.style.color = "green";
    } else if (s == 1) {
      money += 1;
      p.innerText = `${name} got $1 from the survey.`;
      p.style.color = "green";
    } else {
      p.innerText = `${name} did a survey.`;
    }
  } else {
    p.innerText = `${name} can only do survey per 1 hour.`;
    p.style.color = "red";
  }
  noti.insertAdjacentElement("afterbegin", p);
});
//                                freelance
document.getElementById("free").addEventListener("click", () => {
  let p = document.createElement("p");
  timeout(p);
  if (freelanceCounter == 0) {
    freelanceCounter = 1;
    let x = getrand(3, 6);
    hr += x;
    sleep -= 20;
    hunger -= 10;
    money += (x / 2) * 10 + x * 5;
    p.innerText = `${name} got $${(x / 2) * 10 + x * 5} by freelancing.`;
    p.style.color = "green";
  } else {
    p.innerText = `${name} must wait 30 minutes before doing another freelance job.`;
    p.style.color = "red";
  }
  noti.insertAdjacentElement("afterbegin", p);
});
// functions
function update() {
  if (surveyCounter == 1) {
    setInterval(() => {
      surveyCounter = 0;
    }, 30000);
  }
  if (lotteryCounter == 1) {
    setInterval(() => {
      lotteryCounter = 0;
    }, 360000);
  }
  if (freelanceCounter == 1) {
    setInterval(() => {
      freelanceCounter = 0;
    }, 15000);
  }
  //Update Time
  min += 2;
  if (min >= 60) {
    min = 0;
    hr += 1;
  }
  if (hr >= 24) {
    days += 1;
    hr -= 24;
  }
  if (hr < 10) {
    document.getElementById("hr").innerText = `0${hr} :`;
  } else {
    document.getElementById("hr").innerText = `${hr} :`;
  }
  if (min < 10) {
    document.getElementById("min").innerText = `0${min}`;
  } else {
    document.getElementById("min").innerText = `${min}`;
  }
  document.getElementById("days").innerText = `Days Passed: ${days}`;

  // Update STATS
  sleep = (sleep * 10 - 1) / 10;
  hunger = (hunger * 100 - 7) / 100;
  document.getElementById("hun").innerText = `Hunger: ${Math.ceil(hunger)}%`;
  document.getElementById("sle").innerText = `Sleep: ${Math.ceil(sleep)}%`;
  document.getElementById("mon").innerText = `Money: $${money}`;
  if (money >= 100000) {
    hunger = 100;
    sleep = 100;
    clearInterval(interval);
    goodEnding();
    let p = document.createElement("p");
    p.innerText = `THE END`;
    p.style.color = "red";
    noti.insertAdjacentElement("afterbegin", p);
  }
}

// end
document.body.addEventListener("click", () => {
  bad = Math.floor(Math.random() * death);
  console.log(bad, death);
  if (sleep <= 20) {
    let p = document.createElement("p");
    timeout(p);
    if (sleep <= 20 && sleep > 10) {
      p.innerText = `${name} is feeling sleepy and having a hard time staying awake.`;
    } else if (sleep <= 10 && sleep > 0) {
      let p = document.createElement("p");
      p.innerText = `${name} is feeling sleepy and can pass out anytime`;
    } else if (sleep <= 0) {
      if (bad == 0) {
        badEnding();
        p.innerText = `THE END`;
      } else {
        hr += 9;
        sleep += 40;
        death -= 1;
        p.innerText = `${name} passed out. He woke up on his bed not able to remember what happened. he says "Maybe I saw my dad there, maybe he carried me? MAYBE..."`;
      }
    }
    p.style.color = "red";
    noti.insertAdjacentElement("afterbegin", p);
  }
  if (hunger <= 20) {
    let p = document.createElement("p");
    if (hunger <= 20 && hunger > 10) {
      sleep -= 2;
      p.innerText = `${name} is feeling a bit dizzy and his stomach is gurgling, better to eat something.`;
    } else if (hunger <= 10 && hunger > 0) {
      sleep -= 4;
      p.innerText = `${name}'s stomach is gurgling more louder than before and with pain, better to eat something or you can go wild.`;
    } else if (hunger <= 0) {
      if (bad <= 0) {
        hunger = 100;
        sleep = 100;
        clearInterval(interval);
        document.getElementById("data").innerHTML = `You survived ${days} days. 
        You should have earned more ${100000 - money} dollars, 
        maybe something would have happened...`;
        badEnding();
        p.innerText = `THE END`;
      } else {
        hunger += 40;
        sleep += 10;
        death -= 2;
        p.innerText = `${name} passed out suddenly and saw a big meal infront of him, he ate it like there was no tommorow. He says "Maybe I saw my mom, maybe she gave me the food? MAYBE..."`;
      }
    }
    p.style.color = "red";
    noti.insertAdjacentElement("afterbegin", p);
  }
});

function timeout(p) {
  return setTimeout(() => {
    p.remove();
  }, 60000);
}

function getrand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function badEnding() {
  console.log("The End bad");
  document.querySelector(".badEnd").open = true;
}

function goodEnding() {
  console.log("The End good");
  document.querySelector(".goodEnd").open = true;
}
