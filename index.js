const MAX_NUMBER = 100
const MIN_NUMBER = 0
let smolGuess = MIN_NUMBER
let bigGuess = MAX_NUMBER

let guess
let antalGissningar = 0

document.getElementById('too-high-btn').addEventListener('click', function () {
    //fördjupning
    antalGissningar++
    document.getElementById("counter").innerText = "Guesses: " + antalGissningar
    //vanliga uppgiften
    bigGuess = guess
    guess = Math.floor((bigGuess + smolGuess) / 2)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    //fördjupning
    antalGissningar++
    document.getElementById("counter").innerText = "Guesses: " + antalGissningar
    //vanliga uppgiften
    smolGuess = guess
    guess = Math.floor((bigGuess + smolGuess) / 2)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    setMessage("Woho! :)")
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    guess = 50
    setMessage(`Is it ${guess}?`)
    startBot()
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

//fördjupning
document.getElementById("counter").innerText = "Guesses: " + antalGissningar

function startBot() {
    const secretGuess = Math.floor(Math.random() * 100) + 1
    console.log(`starting bot with ${secretGuess}...`)
    setInterval(function () {
        if (secretGuess === guess) {
            document.getElementById('is-correct-btn').click()
        } if (secretGuess > guess) {
            document.getElementById('too-low-btn').click()
        } if (secretGuess < guess) {
            document.getElementById('too-high-btn').click() 
        }
    }, 1000)
}