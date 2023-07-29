const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const display = document.getElementById('display');

var interval = null;
var total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = ()=>{
    totalValue();
    total--;

    if(total >= 0)
    {
        var hr = Math.floor(total/3600);
        var mt = Math.floor((total/60) - (hr*60));
        var sc = total - ((hr*3600) + (mt*60))

        hour.value = hr
        minute.value = mt
        second.value = sc
    }
    else{
        display.innerText = "Time Over !!"
    }
}

start.addEventListener('click', ()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    display.innerText = "Timer Started";
});

reset.addEventListener('click', ()=>{
    clearInterval(interval)

    hour.value = 0
    minute.value = 0
    second.value = 0

    display.innerText = "Timer"
})


let stopwatchDisplay = document.querySelector('.stopwatchDisplay')

let sstart = document.getElementById('sstart');
let sstop = document.getElementById('sstop');
let sreset = document.getElementById('sreset');

const sdisplay = document.getElementById('sdisplay');

let ssec = 0
let smin = 0
let shr = 0

let sId = null

sstart.addEventListener("click", function(){
    if (sId !== null){
        clearInterval(sId)
    }
    sId = setInterval(startStopwatch, 10);
    sdisplay.innerHTML = "Stopwatch Started"
})


sstop.addEventListener("click", function(){
    clearInterval(sId)
    sdisplay.innerHTML = "Stopwatch Stopped"
})

sreset.addEventListener("click", function(){
    clearInterval(sId)
    stopwatchDisplay.innerHTML = `00 : 00 : 00`
    sdisplay.innerHTML = "Stopwatch"
})


function startStopwatch(){
    ssec++
    if(ssec == 100){
        ssec = 0
        smin++
        if(smin == 60){
            smin = 0
            shr++
        }
    }

    let ssecString = ssec < 10 ? `0${ssec}` : ssec
    let sminString = smin < 10 ? `0${smin}` : smin
    let shrString = shr < 10 ? `0${shr}` : shr

    stopwatchDisplay.innerHTML = `${shrString} : ${sminString} : ${ssecString}`
}