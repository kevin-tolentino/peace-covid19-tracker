var currentActive = document.getElementById("currentActive")
var currentCritical = document.getElementById("currentCritical")
var currentRecovered = document.getElementById("currentRecovered")
var currentDeaths = document.getElementById("currentDeaths")
var verseText = document.getElementById("verseText")
var verseRef = document.getElementById("verseRef")
var dateHeader = document.getElementById('date')
var timer = document.getElementById('timer')
var verseArray = []
var leftButton = document.getElementById('leftButton')
var middleButton = document.getElementById('middleButton')
var rightButton = document.getElementById('rightButton')
leftButton.addEventListener("click", getPreviousDay)
middleButton.addEventListener('click', function () {
  covidCurrent()
  startTimer(900, timer)} )
rightButton.addEventListener("click", getPreviewDay)


var currentDate = new Date();
var previousDayDate = new Date();
previousDayDate.setDate(previousDayDate.getDate() - 1);
var previewDayDate = new Date()
previewDayDate.setDate(previewDayDate.getDate() + 1);
var yesterdayYear = previousDayDate.getFullYear().toString();
var yesterdayMonth = (previousDayDate.getMonth() + 1).toString();
if (yesterdayMonth.length === 1) {
  yesterdayMonth = '0' + yesterdayMonth;
}
var yesterdayDay = (previousDayDate.getDate().toString());
if (yesterdayDay.length === 1) {
  yesterdayDay = '0' + yesterdayDay;
}
var formattedPreviousDate = `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}`;

var today = currentDate.getDay()
var yesterday = today - 1
var tomorrow = (today === 6) ? 0 : (today + 1)

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


function startTimer(duration, display) {
    middleButton.setAttribute('disabled', '')
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      if (minutes === "00" && seconds === "00"){
        middleButton.removeAttribute('disabled', '')
        clearInterval(intervalId)
        display.textContent = null
      }

      if (--timer < 0) {
        timer = duration;
      }
      if (timer === 0) {
        display.textContent = minutes + ":" + seconds
      }
    }, 1000);
  }
