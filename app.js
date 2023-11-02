const proposition = document.querySelector(".proposition");
const input = document.querySelector(".btns input");
const btn = document.querySelector(".btn");
const chance = document.querySelector(".count_chance span");

input.focus();

let validRondomNumber = Math.floor(Math.random() * 100);
console.log(validRondomNumber);
let count = 10;

const getResult = () => {
    if (!input.value) return;
    let msg = "Low";
    count--;
    if (+input.value < validRondomNumber && +input.value > 0) {
        proposition.innerText = `Your Number Is ${msg}`;
        proposition.style.color = "red";
        chance.innerText = count;
    } else if (+input.value > validRondomNumber && +input.value <= 100) {
        msg = "high";
        proposition.innerText = `your Number Is ${msg}`;
        proposition.style.color = "red";
        chance.innerText = count;
    } else if (+input.value === validRondomNumber) {
        proposition.innerText = `Congratulation You Find The Right Number!`;
        proposition.style.color = "green";
        btn.style.pointerEvents = "none";
        input.style.pointerEvents = "none";
        btn.style.opacity = 0.5;
    } else {
        proposition.innerText = `your Number Is Out Of Range!`;
        proposition.style.color = "red";
        chance.innerText = count;
    }

    if (count === 0) {
        proposition.innerText = "game Over!";
        proposition.style.color = "red";
        input.style.pointerEvents = "none";
        btn.innerText = "Replay";
        // btn.style.pointerEvents = "none";
        btn.style.opacity = .5;
    }

    if (count < 0) {
        window.location.reload();
    }
}

btn.addEventListener('click', getResult);

