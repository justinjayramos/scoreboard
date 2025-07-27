let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePlusOne = document.getElementById("home-plus-one")
let homePlusTwo = document.getElementById("home-plus-two")
let homePlusThree = document.getElementById("home-plus-three")
let guestPlusOne = document.getElementById("guest-plus-one")
let guestPlusTwo = document.getElementById("guest-plus-two")
let guestPlusThree = document.getElementById("guest-plus-three")

let homePoints = 0
let guestPoints = 0

function homeOnePoint() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function homeTwoPoints() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function homeThreePoints() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function guestOnePoint() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function guestTwoPoints() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function guestThreePoints() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function reset() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}