class App{
  constructor(verseDisplay, covidTable, formattedPreviousDate, timer, leftButton, middleButton, rightButton){
    this.handleGetCovidHistorySuccess = this.handleGetCovidHistorySuccess.bind(this)
    this.handleGetCovidHistoryError = this.handleGetCovidHistoryError.bind(this)
    this.handleGetCovidCurrentSuccess = this.handleGetCovidCurrentSuccess.bind(this)
    this.handleGetCovidCurrentError = this.handleGetCovidCurrentError.bind(this)
    this.handleGetVerseOneSuccess = this.handleGetVerseOneSuccess.bind(this)
    this.handleGetVerseOneError = this.handleGetVerseOneSuccess.bind(this)
    this.handleGetVerseTwoSuccess = this.handleGetVerseTwoSuccess.bind(this)
    this.handleGetVerseTwoError = this.handleGetVerseTwoError.bind(this)
    this.handleGetVerseThreeSuccess = this.handleGetVerseThreeSuccess.bind(this)
    this.handleGetVerseThreeError = this.handleGetVerseThreeError.bind(this)
    this.handleGetVerseFourSuccess = this.handleGetVerseFourSuccess.bind(this)
    this.handleGetVerseFourError = this.handleGetVerseFourError.bind(this)
    this.verseArray = []
    this.formattedPreviousDate = formattedPreviousDate
    this.verseDisplay = verseDisplay
    this.covidTable = covidTable
    this.timer = timer
    this.leftButton = leftButton
    this.middleButton = middleButton
    this.rightButton = rightButton
    //fix these event listeners to call correct methods from respective classes
    this.leftButton.addEventListener("click", getPreviousDay)
    this.middleButton.addEventListener('click', function () {
      covidCurrent()
      startTimer(900, timer)
    })
    this.rightButton.addEventListener("click", getPreviewDay)
  }

 covidHistory() {
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
  $.ajax({
    method: "GET",
    url: `https://covid-193.p.rapidapi.com/history?day=${this.formattedPreviousDate}&country=usa`,
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
    },
    beforeSend: function () {
      this.beforeSendCovid()
      rightButton.setAttribute('disabled', '')

    },
    success: this.handleGetCovidHistorySuccess,
    error: this.handleGetCovidHistoryError
  })
}

 covidCurrent() {
  $.ajax({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
    },
    beforeSend: function () {
      this.beforeSendCovid()
      leftButton.setAttribute('disabled', '')
      rightButton.setAttribute('disabled', '')
    },
    success: this.handleGetCovidCurrentSuccess,
    error: this.handleGetCovidCurrentError
  })
}


 getVerseOneSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 1 },
    beforeSend: this.verseDisplay.beforeSendVerse(),
    success: this.handleGetVerseOneSuccess,
    error: this.handleGetVerseOneError
  })
}

 getVerseTwoSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 2 },
    beforeSend: this.verseDisplay.beforeSendVerse(),
    success: this.handleGetVerseTwoSuccess,
    error: this.handleGetVerseTwoError
  })
}

 getVerseThreeSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 3 },
    beforeSend: this.verseDisplay.beforeSendVerse(),
    success: this.handleGetVerseThreeSuccess,
    error: this.handleGetVerseThreeError
  })
}

 getVerseFourSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 4 },
    beforeSend: this.verseDisplay.beforeSendVerse(),
    success: this.handleGetVerseFourSuccess,
    error: this.handleGetVerseFourError
  })
}

 getVerses() {
  this.getVerseOneSearch()

  this.getVerseTwoSearch()

  this.getVerseThreeSearch()

  this.getVerseFourSearch()
}





function handleGetCovidCurrentSuccess(data) {
  updateCurrentCovidStats(data)
  leftButton.removeAttribute('disabled', '')
  rightButton.removeAttribute('disabled', '')

}

function handleGetCovidCurrentError(error) {
  console.error(error)
}

function handleGetCovidHistorySuccess(data) {
  PreviousDayCovidStats(data)
  rightButton.removeAttribute('disabled', '')
}

function handleGetCovidHistoryError(error) {
  console.error(error)
}

handleGetVerseOneSuccess(data) {
  var content = data.results[49].content
  var reference = data.results[49].reference
  var numbers626 = { content, reference }
  this.verseArray[0] = numbers626
  if (today === 0) { verseOfTheDay(numbers626) }
}

handleGetVerseOneError(error) {
  console.error(error)
}

function handleGetVerseTwoSuccess(data) {
  var content = data.results[65].content
  var reference = data.results[65].reference
  var psalm48 = { content, reference }
  verseArray[1] = psalm48
  content = data.results[96].content
  reference = data.results[96].reference
  var isaiah263 = { content, reference }
  this.verseArray[2] = isaiah263
  if (today === 1) { verseOfTheDay(psalm48) }
  if (today === 2) { verseOfTheDay(isaiah263) }

}

 handleGetVerseTwoError(error) {
  console.error(error)
}

 handleGetVerseThreeSuccess(data) {
  var content = data.results[76].content
  var reference = data.results[76].reference
  var john1427 = { content, reference }
  this.verseArray[3] = john1427
  content = data.results[90].content
  reference = data.results[90].reference
  var romans51 = { content, reference }
  verseArray[4] = romans51
  if (today === 3) { verseOfTheDay(john1427) }
  if (today === 4) { verseOfTheDay(romans51) }
}

 handleGetVerseThreeError(error) {
  console.error(error)
}

 handleGetVerseFourSuccess(data) {
  var content = data.results[13].content
  var reference = data.results[13].reference
  var philippians12 = { content, reference }
  this.verseArray[5] = philippians12
  content = data.results[18].content
  reference = data.results[18].reference
  var colossians315 = { content, reference }
  this.verseArray[6] = colossians315
  if (today === 5) { verseOfTheDay(philippians12) }
  if (today === 6) { verseOfTheDay(colossians315) }

}

 handleGetVerseFourError(error) {
  console.error(error)
}


function updateCurrentCovidStats(data) {
  currentActive.textContent = formatNumber(data.response[3].cases.active)
  currentCritical.textContent = formatNumber(data.response[3].cases.critical)
  currentRecovered.textContent = formatNumber(data.response[3].cases.recovered)
  currentDeaths.textContent = formatNumber(data.response[3].deaths.total)
}


function getPreviousDay() {
  this.leftButton.classList.add('invisible')
  this.middleButton.classList.add('invisible')
  this.covidHistory();
  previousVerseOfTheDay()
  this.rightButton.textContent = 'View Current Day'
  this.rightButton.removeEventListener('click', getPreviewDay)
  this.rightButton.addEventListener('click', covidCurrent)
  this.rightButton.addEventListener('click', viewCurrentDayRightButton)
}

function getPreviewDay() {
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

function viewCurrentDayRightButton() {
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

 startTimer(duration, display) {
  middleButton.setAttribute('disabled', '')
  var timer = duration, minutes, seconds;
  var intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (minutes === "00" && seconds === "00") {
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

  start(){
  this.getVerses()
  this.startTimer(900, this.timer)

}


covidCurrent();
getVerses();
}
