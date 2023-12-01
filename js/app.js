let object = document.querySelector('.object')

let input = document.querySelector(".startMenu input")

let label = document.querySelector(".startMenu label")

let h2 = document.querySelector(".startMenu h2")

let startMenu = document.querySelector('.start')

let duckSound = new Audio("./audio/duckSound.mp3")

let gameTime = input.value

input.addEventListener("input",function(){
    gameTime = input.value
    label.innerHTML = `Game time ${gameTime}s`
})

function start(){
    object.style.display = "block"

    let i = 0

    let points = 0

    let time = 500

    let disapair = setInterval(() =>{
        object.style.visibility= `hidden`
    }, time)

    let loop = setInterval(() => {

        let screenWidth = window.innerWidth - 150

        let screenHidth = window.innerHeight - 150

        i++

        let randomX = Math.floor(Math.random() * screenWidth)

        let randomY = Math.floor(Math.random() * screenHidth)

        object.style.visibility= `visible`

        object.style.left = `${randomX}px`

        object.style.top = `${randomY}px`

        if (i == gameTime) {

            clearInterval(loop)

            clearInterval(disapair)

            object.style.display = "none"

            startMenu.style.display = "flex"

            h2.innerHTML = `Your Score: ${points} Poits out of ${i}`
        }
    }, time * 2);
    
    object.addEventListener("mousedown", function(event){
        points++
        duckSound.currentTime = 0
        duckSound.play()
        object.style.visibility = "hidden"
    })
}

// *interval
let countDownTimeShower = document.querySelector('.countDownTimeShower')

let countDownTimeShowerH2 = document.querySelector('.countDownTimeShower h1')

let countDownSound = new Audio("./audio/countdown.mp3")

function count(){

    let countdowntime = 3

    countDownTimeShower.style.display = "flex"

    startBtn.innerHTML = "RESTART"

    startMenu.style.display = "none"

    countDownSound.play()

    let timeCounter = setInterval(function(){
        
        countdowntime--

        countDownTimeShowerH2.innerHTML = countdowntime

        if (countdowntime < 1) {

            clearInterval(timeCounter)

            countDownTimeShower.style.display = "none"

            countDownTimeShowerH2.innerHTML = 3

            start()
            
        }
    }, 1000)
}


// *crosshair

let crosshair = document.querySelector('.crosshair')

window.addEventListener('mousemove',function(event){

    let clientX = event.clientX

    let clientY = event.clientY

    crosshair.style.top = clientY + "px"

    crosshair.style.left = clientX + "px"
})

// *game start

let startBtn = document.querySelector(".startBtn button")

startBtn.addEventListener('click', count)

// *sound

let audio = new Audio("./audio/audio.mp3")

window.addEventListener('mousedown', function(){

    audio.currentTime = 0

    audio.play()

})

