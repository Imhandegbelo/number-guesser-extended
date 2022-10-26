// Simple number guessing game project.
// Developed by George Imhandegbelo Github - @Imhanedegbelo


// Get username from the player
let username = prompt("Hello, please enter a username", "User" | "User");
let range = 2 //initial range
let score = 0 //initial score
let level = 1 //initial level
let failCount = [] //to count the number of times wrong guesses were made

document.querySelector('#score').innerHTML = score
document.querySelector('#level').innerHTML = level
document.querySelector('#range').innerHTML = range

// Use the provided username, else use "User" as username
if (username !== null) {
  document.querySelector('#user').innerHTML = username
} else {
  document.querySelector('#user').innerHTML = "User"
}


console.log(username)

// function that checks the guess
const check = () => {
  let guess = document.querySelector('#guess').value
  let feedback = document.querySelector('#feedback')
  let rand = Math.floor(Math.random() * range)
  // if guess was right, increment range, score and level. Reset fail counter
  if (rand == guess) {
    console.log(Boolean(true))
    range++           //increment the range
    score++           //increment the score
    level++           //increment the level
    failCount = []    //reset the failure counter
    document.querySelector('#score').innerHTML = score
    document.querySelector('#level').innerHTML = level
    document.querySelector('#range').innerHTML = range
    document.getElementById('feedback').style.color = 'green'
    feedback.innerHTML = "Correct! Level promoted"
  } else {
    console.log(Boolean(false))
    failCount.push(Boolean(false))
    document.querySelector('#score').innerHTML = score
    document.querySelector('#level').innerHTML = level
    document.querySelector('#range').innerHTML = range
    document.getElementById('feedback').style.color = 'red'
    feedback.innerHTML = `Wrong! ${5 - failCount.length} chances left`
  }

  // if player guesses wrong 5 times, game is over
  if (failCount.length === 5)
    gameOver()
  console.log(`new range = ${range}`)
  console.log(`count = ${failCount.length}`)
  console.log(guess)
}

// If game is over, alert the user of score and level and reset everything to default
const gameOver = () => {
  alert(
    `Game Over! \n
    Weldone ${username}\n
    Final score = ${score} \n
    Final level = ${level}`
  )
  range = 2
  score = 0
  level = 1
  failCount = []
}