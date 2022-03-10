//See the timer increment every second once the page has loaded.
let counter = document.querySelector('#counter')
let number = 0

function increase () {
    console.log(number)
    if (number >= 0) {
        ++number
        counter.innerText = number
    }
}

let interval = setInterval(increase, 1000)

function incrementCounter () {
    interval = setInterval(increase, 1000)
}

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
let array = []

function clickHeart () {
    ++numberLikes
    const likes = document.querySelector('.likes')
    const li = document.createElement('li')
    li.id = number
    if (array.includes(number)) {
        let matchingLi = document.getElementById(number)
        matchingLi.innerText = `${number} has been liked ${numberLikes} times`
    }
    else {
        numberLikes = 1
        likes.appendChild(li)
        li.innerText = `${number} has been liked ${numberLikes} times`
        array.push(number)
    }
}

//pause the counter
//disable all buttons except the pause button
//switch the label on the button from "pause" to "resume"
//Click the "restart" button to restart the counter and re-enable the buttons.
const pauseButton = document.querySelector('#pause')

pauseButton.addEventListener('click', pauseCounter)
let paused = false

function pauseCounter () {
    if (!paused) {
        paused = true
        clearInterval(interval)
        pauseButton.innerText = 'resume'
        heartButton.disabled = true
        plusButton.disabled = true
        minusButton.disabled = true  
    }
    else {
        paused = false
        incrementCounter()
        pauseButton.innerText = 'pause'
        heartButton.disabled = false
        plusButton.disabled = false
        minusButton.disabled = false
    }
}

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
const commentBox = document.querySelector('#comment-form')
commentBox.addEventListener('submit', submitComment)

function submitComment(e) {
    e.preventDefault()
    const comment = document.createElement('p')
    comment.innerText = `${e.target[0].value}`
    const commentList = document.querySelector('#list')
    commentList.appendChild(comment)
}
