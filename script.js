var ms=0; s=0; m=0; h=0;
var timer;

var stopwatchEl = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.laps');

function getTimer() {
   return (h<10 ? "0"+h : h) + ":" + (m<10 ? "0"+m : m) + ":" + (s<10 ? "0"+s : s) + ":" + (ms<10 ? "0"+ms : ms);
}

function stopTimer() {
   clearInterval(timer);
   timer = false;
}

function start_stop() {
   if(!timer) {
      timer = setInterval(run, 10);
   }
   else {
      stopTimer();
   }
}

function run() {
   stopwatchEl.textContent = getTimer();
   ms++;
   if(ms == 100){
      ms=0;
      s++;
   }
   if(s == 60){
      s=0;
      m++;
   }
   if(m == 60){
      m=0;
      h++;
   }
}

function reset() {
   stopTimer();
   h=0; m=0; s=0; ms=0;
   stopwatchEl.textContent = getTimer();
   lapsContainer.innerHTML = '';
}

function lap() {
   if(timer) {
      var li = document.createElement('li');
      li.innerText = getTimer();
      lapsContainer.appendChild(li);
   }
}