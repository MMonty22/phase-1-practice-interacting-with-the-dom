//See the timer increment every second once the page has loaded.
let counter = document.querySelector('#counter')
let number = 0

function increase () {
    if (number >= 0) {
        ++number
        counter.innerText = number
    }
}

function incrementCounter () {
    setInterval(increase, 1000)   
}

incrementCounter();

//Manually increment and decrement the counter using the plus and minus buttons.
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')

plusButton.addEventListener('click', e => ++number)

minusButton.addEventListener('click', e => --number)

//"Like" an individual number of the counter.
//see the count of the number of "likes" associated with that number displayed.
const heartButton = document.querySelector('#heart')

heartButton.addEventListener('click', clickHeart)

let numberLikes = 0

function clickHeart () {
    ++numberLikes
    const likes = document.querySelector('.likes')
    let newNumber = ''
    const likeLists = document.createElement('li')
    if (number !== newNumber) {
        likeLists.innerText = `${number} has been liked ${numberLikes} times`
        likes.appendChild(likeLists)
    }
    else (likeLists.innerText = `${number} has been liked ${numberLikes} times`)
}

//Pause the counter, which should:
//pause the counter
//disable all buttons except the pause button
//switch the label on the button from "pause" to "resume"
const pauseButton = document.querySelector('#pause')

pauseButton.addEventListener('click', pauseCounter)

function pauseCounter () {
    counter = number
    pauseButton.innerText = 'resume'
    heartButton.disabled = true
    plusButton.disabled = true
    minusButton.disabled = true
}

//Click the "restart" button to restart the counter and re-enable the buttons.
if (pauseButton.innerText === 'resume') {
    pauseButton.addEventListener('click', function () {
        pauseButton.innerText = 'pause'
        heartButton.disabled = false
        plusButton.disabled = false
        minusButton.disabled = false
    })
}

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
const commentBox = document.querySelector('#comment-form')
commentBox.addEventListener('submit', submitComment)

function submitComment(e, input) {
    e.preventDefault()
    const comment = document.createElement('p')
    comment.innerHTML = `${input}`
}
