class App {
  constructor(verseDisplay,
    covidTable,
    formattedPreviousDate,
    timer, previousDayDate,
    currentDate,
    previewDayDate,
    yesterday,
    today,
    tomorrow,
    currentRightDay,
    leftButton,
    middleButton,
    rightButton,
    currentLeftDay,
    errorMessage) {
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
    this.previousDayDate = previousDayDate
    this.currentDate = currentDate
    this.previewDayDate = previewDayDate
    this.yesterday = yesterday
    this.today = today
    this.tomorrow = tomorrow
    this.currentRightDay = currentRightDay
    this.leftButton = leftButton
    this.middleButton = middleButton
    this.rightButton = rightButton
    this.currentLeftDay = currentLeftDay
    this.errorMessage = errorMessage
    this.covidCurrent = this.covidCurrent.bind(this)
    this.covidHistory = this.covidHistory.bind(this)
    this.currentRightDay.addEventListener("click", () => {
      this.covidCurrent()
      this.verseDisplay.verseOfTheDay(this.verseArray[this.today], this.currentDate)
      this.viewCurrentDayRight()
    })
    this.leftButton.addEventListener("click", () => {
      this.getPreviousDay()
      this.covidHistory()
      this.verseDisplay.previousVerseOfTheDay(this.verseArray, this.previousDayDate, this.yesterday)
    })
    this.middleButton.addEventListener('click', () => {
      this.covidCurrent()
      this.startTimer(900, timer)
    })
    this.rightButton.addEventListener("click", () => {
      this.getPreviewDay()
      this.verseDisplay.previewVerseOfTheDay(this.verseArray, this.previewDayDate, this.tomorrow)
      this.covidTable.previewStatsPlaceholder()
    })
    this.currentLeftDay.addEventListener("click", () => {
      this.covidCurrent()
      this.verseDisplay.verseOfTheDay(this.verseArray[this.today], this.currentDate)
      this.viewCurrentDayLeft()
    })
  }

  start() {
    this.getVerses()
    this.covidCurrent()
    this.startTimer(900, this.timer)
  }

  covidHistory() {
    $.ajax({
      method: "GET",
      url: `https://covid-193.p.rapidapi.com/history?day=${this.formattedPreviousDate}&country=usa`,
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
      },
      beforeSend: () => {
        this.covidTable.beforeSendCovid()
        this.rightButton.setAttribute('disabled', '')
      },
      success: this.handleGetCovidHistorySuccess,
      error: this.handleGetCovidHistoryError
    })
  }

  covidCurrent() {
    $.ajax({
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics?country=USA",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
      },
      beforeSend: () => {
        this.covidTable.beforeSendCovid()
        this.leftButton.setAttribute('disabled', '')
        this.rightButton.setAttribute('disabled', '')
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


  handleGetCovidCurrentSuccess(data) {
    this.covidTable.updateCurrentCovidStats(data)
    this.leftButton.removeAttribute('disabled', '')
    this.rightButton.removeAttribute('disabled', '')

  }

  handleGetCovidCurrentError(error) {
    console.error(error)
  }

  handleGetCovidHistorySuccess(data) {
    this.covidTable.previousDayCovidStats(data)
    this.rightButton.removeAttribute('disabled', '')
  }

  handleGetCovidHistoryError(error) {
    console.error(error)
  }

  handleGetVerseOneSuccess(data) {
    var content = data.results[49].content
    var reference = data.results[49].reference
    var numbers626 = { content, reference }
    this.verseArray[0] = numbers626
    if (this.today === 0) { this.verseDisplay.verseOfTheDay(numbers626, this.currentDate) }
  }

  handleGetVerseOneError(error) {
    console.error(error)
  }

  handleGetVerseTwoSuccess(data) {
    var content = data.results[65].content
    var reference = data.results[65].reference
    var psalm48 = { content, reference }
    this.verseArray[1] = psalm48
    content = data.results[96].content
    reference = data.results[96].reference
    var isaiah263 = { content, reference }
    this.verseArray[2] = isaiah263
    if (this.today === 1) { this.verseDisplay.verseOfTheDay(psalm48, this.currentDate) }
    if (this.today === 2) { this.verseDisplay.verseOfTheDay(isaiah263, this.currentDate) }

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
    this.verseArray[4] = romans51
    if (this.today === 3) { this.verseDisplay.verseOfTheDay(john1427, this.currentDate) }
    if (this.today === 4) { this.verseDisplay.verseOfTheDay(romans51, this.currentDate) }
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
    if (this.today === 5) { this.verseDisplay.verseOfTheDay(philippians12, this.currentDate) }
    if (this.today === 6) { this.verseDisplay.verseOfTheDay(colossians315, this.currentDate) }

  }

  handleGetVerseFourError(error) {
    console.error(error)
  }


  getPreviousDay() {
    var currentRightDay = document.getElementById('currentRightDay')
    var leftButton = document.getElementById('leftButton')
    var middleButton = document.getElementById('middleButton')
    var rightButton = document.getElementById('rightButton')
    leftButton.classList.add('invisible')
    middleButton.classList.add('invisible')
    rightButton.classList.add('d-none')
    currentRightDay.classList.remove('d-none')
  }

  getPreviewDay() {
    var currentLeftDay = document.getElementById('currentLeftDay')
    var leftButton = document.getElementById('leftButton')
    var middleButton = document.getElementById('middleButton')
    var rightButton = document.getElementById('rightButton')
    leftButton.classList.add('invisible')
    middleButton.classList.add('invisible')
    rightButton.classList.add('d-none')
    currentLeftDay.classList.remove('d-none')
  }

  viewCurrentDayRight() {
    var currentRightDay = document.getElementById('currentRightDay')
    var leftButton = document.getElementById('leftButton')
    var middleButton = document.getElementById('middleButton')
    var rightButton = document.getElementById('rightButton')
    leftButton.classList.remove('invisible')
    middleButton.classList.remove('invisible')
    rightButton.classList.remove('d-none')
    currentRightDay.classList.add('d-none')
  }

  viewCurrentDayLeft() {
    var currentLeftDay = document.getElementById('currentLeftDay')
    var leftButton = document.getElementById('leftButton')
    var middleButton = document.getElementById('middleButton')
    var rightButton = document.getElementById('rightButton')
    leftButton.classList.remove('invisible')
    middleButton.classList.remove('invisible')
    rightButton.classList.remove('d-none')
    currentLeftDay.classList.add('d-none')
  }

  startTimer(duration, display) {
    this.middleButton.setAttribute('disabled', '')
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      if (minutes === "00" && seconds === "00") {
        this.middleButton.removeAttribute('disabled', '')
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
}
