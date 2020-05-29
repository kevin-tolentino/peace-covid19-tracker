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
middleButton.addEventListener('click', covidCurrent)
rightButton.addEventListener("click", getPreviewDay)


var currentDate = new Date();
var previousDayDate = new Date();
previousDayDate.setDate(previousDayDate.getDate() - 1);
var previewDayDate = new Date()
previewDayDate.setDate(previewDayDate.getDate() + 1);
var currentYear = currentDate.getFullYear().toString();
var currentMonth = (currentDate.getMonth() + 1).toString();
if (currentMonth.length === 1) {
  currentMonth = '0' + currentMonth;
}
var currentDay = (currentDate.getDate().toString());
if (currentDay.length === 1) {
  currentDay = '0' + currentDay;
}
var formattedPreviousDate = `${currentYear}-${currentMonth}-${currentDay-1}`;

var today = currentDate.getDay()
var yesterday = today - 1
var tomorrow = (today === 6) ? 0 : (today + 1)

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

function covidHistory(){
  $.ajax({
    method: "GET",
    url: `https://covid-193.p.rapidapi.com/history?day=${formattedPreviousDate}&country=usa`,
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
    },
    beforeSend: function(){
      currentActive.textContent = 'loading'
      currentCritical.textContent = 'loading'
      currentRecovered.textContent = 'loading'
      currentDeaths.textContent = 'loading'
      rightButton.setAttribute('disabled', '')

    },
    success: handleGetCovidHistorySuccess,
    error: handleGetCovidHistoryError
  })
}

function covidCurrent(){
  $.ajax({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
    },
    beforeSend: function () {
      currentActive.textContent = 'loading'
      currentCritical.textContent = 'loading'
      currentRecovered.textContent = 'loading'
      currentDeaths.textContent = 'loading'
      leftButton.setAttribute('disabled', '')
      rightButton.setAttribute('disabled', '')

    },
    success: handleGetCovidCurrentSuccess,
    error: handleGetCovidCurrentError
  })
}


function getVerseOneSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 1 },
    beforeSend: function () {
      if (today === 0){
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
    success: handleGetVerseOneSuccess,
    error: handleGetVerseOneError
  })
}

function getVerseTwoSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 2 },
    beforeSend: function () {
      if (today === 1 || today === 2) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
    success: handleGetVerseTwoSuccess,
    error: handleGetVerseTwoError
  })
}

function getVerseThreeSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 3 },
    beforeSend: function () {
      if (today === 3 || today === 4) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
    success: handleGetVerseThreeSuccess,
    error: handleGetVerseThreeError
  })
}

function getVerseFourSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 4 },
    beforeSend: function () {
      if (today === 5 || today === 6) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
    success: handleGetVerseFourSuccess,
    error: handleGetVerseFourError
  })
}

function getVerses(){
  getVerseOneSearch()

  getVerseTwoSearch()

  getVerseThreeSearch()

  getVerseFourSearch()
}



function previousVerseOfTheDay(){
  dateHeader.textContent = previousDayDate.toDateString()
  var previousVerseInfo = verseArray[yesterday]
  var formattedText = previousVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previousVerseInfo.reference
}

function verseOfTheDay(verseObject) {
  dateHeader.textContent = currentDate.toDateString()
  var formattedText = verseObject.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = verseObject.reference
}

function previewVerseOfTheDay(){
  dateHeader.textContent = previewDayDate.toDateString()
  var previewVerseInfo = verseArray[tomorrow]
  var formattedText = previewVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previewVerseInfo.reference
}



function handleGetCovidCurrentSuccess(data){
  updateCurrentCovidStats(data)
  leftButton.removeAttribute('disabled', '')
  rightButton.removeAttribute('disabled', '')

    }

function handleGetCovidCurrentError(error){
  console.error(error)
}

function handleGetCovidHistorySuccess(data){
  PreviousDayCovidStats(data)
  rightButton.removeAttribute('disabled', '')
}

function handleGetCovidHistoryError(error){
  console.error(error)
}

function handleGetVerseOneSuccess(data) {
  var content = data.results[49].content
  var reference = data.results[49].reference
  var numbers626 = {content, reference}
  verseArray[0] = numbers626
  if (today === 0) {verseOfTheDay(numbers626)}
}

function handleGetVerseOneError(error) {
  console.error(error)
}

function handleGetVerseTwoSuccess(data) {
  var content = data.results[65].content
  var reference = data.results[65].reference
  var psalm48 = { content, reference }
  verseArray[1] = psalm48
  content = data.results[96].content
  reference = data.results[96].reference
  var isaiah263 = {content, reference }
  verseArray[2] = isaiah263
  if (today === 1) { verseOfTheDay(psalm48) }
  if (today === 2) { verseOfTheDay(isaiah263) }

}

function handleGetVerseTwoError(error) {
  console.error(error)
}

function handleGetVerseThreeSuccess(data) {
  var content = data.results[76].content
  var reference = data.results[76].reference
  var john1427 = { content, reference }
  verseArray[3] = john1427
  content = data.results[90].content
  reference = data.results[90].reference
  var romans51 = { content, reference }
  verseArray[4] = romans51
  if (today === 3) { verseOfTheDay(john1427) }
  if (today === 4) { verseOfTheDay(romans51) }
}

function handleGetVerseThreeError(error) {
  console.error(error)
}

function handleGetVerseFourSuccess(data) {
  var content = data.results[13].content
  var reference = data.results[13].reference
  var philippians12 = { content, reference }
  verseArray[5] = philippians12
  content = data.results[18].content
  reference = data.results[18].reference
  var colossians315 = { content, reference }
  verseArray[6] = colossians315
  if (today === 5) { verseOfTheDay(philippians12) }
  if (today === 6) { verseOfTheDay(colossians315) }

}

function handleGetVerseFourError(error) {
  console.error(error)
}

function PreviousDayCovidStats(data) {
  currentActive.textContent = formatNumber(data.response[0].cases.active)
  currentCritical.textContent = formatNumber(data.response[0].cases.critical)
  currentRecovered.textContent = formatNumber(data.response[0].cases.recovered)
  currentDeaths.textContent = formatNumber(data.response[0].deaths.total)
}

function updateCurrentCovidStats(data){
  currentActive.textContent = formatNumber(data.response[3].cases.active)
  currentCritical.textContent = formatNumber(data.response[3].cases.critical)
  currentRecovered.textContent = formatNumber(data.response[3].cases.recovered)
  currentDeaths.textContent = formatNumber(data.response[3].deaths.total)
  }


function getPreviousDay(){
    leftButton.classList.add('invisible')
    middleButton.classList.add('invisible')
    covidHistory();
    previousVerseOfTheDay()
    rightButton.textContent = 'View Current Day'
    rightButton.removeEventListener('click', getPreviewDay)
    rightButton.addEventListener('click', covidCurrent)
    rightButton.addEventListener('click', viewCurrentDayRightButton)
  }

  function getPreviewDay(){
    middleButton.classList.add('invisible')
    rightButton.classList.add('invisible')
    previewVerseOfTheDay()
    leftButton.textContent = 'View Current Day'
    leftButton.removeEventListener('click', getPreviousDay)
    leftButton.addEventListener('click', viewCurrentDayLeftButton)
    currentActive.textContent = 'TBD'
    currentCritical.textContent = 'TBD'
    currentRecovered.textContent = 'TBD'
    currentDeaths.textContent = 'TBD'

  }

function viewCurrentDayRightButton(){
      leftButton.classList.remove('invisible')
      middleButton.classList.remove('invisible')
      rightButton.removeEventListener('click', covidCurrent)
      rightButton.removeEventListener('click', viewCurrentDayRightButton)
      verseOfTheDay(verseArray[today])
  rightButton.textContent = "Preview Tomorrow's Verse"
      rightButton.addEventListener('click', getPreviewDay)

    }

function viewCurrentDayLeftButton() {
  rightButton.classList.remove('invisible')
  middleButton.classList.remove('invisible')
  leftButton.removeEventListener('click', covidCurrent)
  leftButton.removeEventListener('click', viewCurrentDayLeftButton)
  verseOfTheDay(verseArray[today])
  covidCurrent()
  leftButton.textContent = 'Previous Day'
  leftButton.addEventListener("click", getPreviousDay)
}




  startTimer(300, timer)
  covidCurrent();
  getVerses();
