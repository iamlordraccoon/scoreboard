let homeScoreBtnOne = document.getElementById("homeplus1-btn")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function homeplus1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeplus2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeplus3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guestplus1-btn")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function guestplus1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestplus2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestplus3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}