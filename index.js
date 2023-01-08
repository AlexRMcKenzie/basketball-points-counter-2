let scoreHomeEl = document.getElementById("score-home-el")
let scoreAwayEl = document.getElementById("score-away-el")

let countHome = 0
let countAway = 0

// Home Score Counter
function oneHome() {
    countHome += 1
    scoreHomeEl.textContent = countHome
}
function twoHome() {
    countHome += 2
    scoreHomeEl.textContent = countHome
}
function threeHome() {
    countHome += 3
    scoreHomeEl.textContent = countHome
}

// Away Score Counter
function oneAway() {
    countAway += 1
    scoreAwayEl.textContent = countAway
}

function twoAway() {
    countAway += 2
    scoreAwayEl.textContent = countAway
}

function threeAway() {
    countAway += 3
    scoreAwayEl.textContent = countAway
}