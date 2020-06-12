class App{
  constructor(verseDisplay, covidTable, footerButtons){
    this.verseDisplay = verseDisplay
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
    this.verseDisplay = verseDisplay
  }

 covidHistory() {
  $.ajax({
    method: "GET",
    url: `https://covid-193.p.rapidapi.com/history?day=${formattedPreviousDate}&country=usa`,
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
    },
    //move this to covidTable class component as it's own method
    beforeSend: function () {
      currentActive.textContent = 'loading'
      currentCritical.textContent = 'loading'
      currentRecovered.textContent = 'loading'
      currentDeaths.textContent = 'loading'
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
    //move this to covidTable class component as it's own method
    beforeSend: function () {
      currentActive.textContent = 'loading'
      currentCritical.textContent = 'loading'
      currentRecovered.textContent = 'loading'
      currentDeaths.textContent = 'loading'
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
    beforeSend: function () {
      if (today === 0) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
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
    beforeSend: function () {
      if (today === 1 || today === 2) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
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
    beforeSend: function () {
      if (today === 3 || today === 4) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
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
    beforeSend: function () {
      if (today === 5 || today === 6) {
        verseText.textContent = 'loading'
        verseRef.textContent = 'loading'
      }
    },
    success: this.handleGetVerseFourSuccess,
    error: this.handleGetVerseFourError
  })
}

function getVerses() {
  getVerseOneSearch()

  getVerseTwoSearch()

  getVerseThreeSearch()

  getVerseFourSearch()
}



function previousVerseOfTheDay() {
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

function previewVerseOfTheDay() {
  dateHeader.textContent = previewDayDate.toDateString()
  var previewVerseInfo = verseArray[tomorrow]
  var formattedText = previewVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previewVerseInfo.reference
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

function handleGetVerseOneSuccess(data) {
  var content = data.results[49].content
  var reference = data.results[49].reference
  var numbers626 = { content, reference }
  verseArray[0] = numbers626
  if (today === 0) { verseOfTheDay(numbers626) }
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
  var isaiah263 = { content, reference }
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

function updateCurrentCovidStats(data) {
  currentActive.textContent = formatNumber(data.response[3].cases.active)
  currentCritical.textContent = formatNumber(data.response[3].cases.critical)
  currentRecovered.textContent = formatNumber(data.response[3].cases.recovered)
  currentDeaths.textContent = formatNumber(data.response[3].deaths.total)
}


function getPreviousDay() {
  leftButton.classList.add('invisible')
  middleButton.classList.add('invisible')
  covidHistory();
  previousVerseOfTheDay()
  rightButton.textContent = 'View Current Day'
  rightButton.removeEventListener('click', getPreviewDay)
  rightButton.addEventListener('click', covidCurrent)
  rightButton.addEventListener('click', viewCurrentDayRightButton)
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


startTimer(900, timer)
covidCurrent();
getVerses();
}
