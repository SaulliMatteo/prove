let start = 0
let currentTime = 0
let tempoTrascorso = 0;
let running = false;
let click = 0
const display = document.getElementById("display")
let timer = String(display.textContent)
let setIntervalId;



function riempi(str){
    if(str.toString.length == 1){ 
        str = "0" + str.toString()
    }
    return str
}

function calcoloTempo(){
    
    currentTime += 1
    console.log(currentTime)

    let timerArray = timer.split(':')

    timerArray[2] = currentTime;
    if(currentTime >= 60){
        timerArray[1] += 1;
        if(timerArray[1] >= 60){
            timerArray[0] += 1;
        }
    }
    
    
    tempoTrascorso = timerArray[2] + timerArray[1]*60 + timerArray[0]*60*60

    timerArray[2] = riempi(timerArray[2])
    timerArray[1] = riempi(timerArray[1])
    timerArray[0] = riempi(timerArray[0])

    timer = timerArray.join(':')
    console.log(timer);
    display.textContent = timer;
}

function startTimer(){
    if (!running) {
        running = true
        setIntervalId = setInterval(calcoloTempo, 1000)
    }
   

}

function stopTimer(){
    if(running){
        running = false
        clearInterval(setIntervalId);
        currentTime = tempoTrascorso;
    }
}

function clearInput(){
    currentTime = 0
    tempoTrascorso = 0
    display.textContent = "00:00:00"
}
