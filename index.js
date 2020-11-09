const MAX_NUMBER = 100
const MIN_NUMBER = 0
let smolGuess = MIN_NUMBER
let bigGuess = MAX_NUMBER

let guess

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    bigGuess = guess
    guess = Math.floor((bigGuess + smolGuess)/2)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    smolGuess = guess
    guess = Math.floor((bigGuess + smolGuess)/2)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click',function() {
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
}


document
    .getElementById('start-btn')
    .addEventListener('click', start)

