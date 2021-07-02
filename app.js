const timeLeft = document.getElementById('time-left')

const birthday = new Date('07/19/2021')
const second = 1000
const minute = second *60
const hour = minute *60
const day = hour * 24 // milliseconds
let timerId




function countdown() { 
    
    const today = new Date()
    const timeSpan = birthday - today    
    console.log(timeSpan);
    if(timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a nice Birthday!"
        clearInterval(timerId)
        return
    }
    else if(timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday!!!!"
        clearInterval(timerId)
    }
    
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

        timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ' + " \n\n Neel_bhai Happy ' Birthday ' Count_Down!!!!"  
}

timerId = setInterval(countdown, second)