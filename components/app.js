class App{
covidHistory() {
  $.ajax({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history?country=USA",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
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
    success: this.handleGetVerseFourSuccess,
    error: this.handleGetVerseFourError
  })
}

verseObjectMaker(data) {

}



handleGetCovidCurrentSuccess(data) {
  console.log("Current Covid Data", data)
  updateCurrentCovidStats(data)
}

handleGetCovidCurrentError(error) {
  console.error(error)
}

handleGetCovidHistorySuccess(data) {
  console.log("History Covid Data", data)
}

handleGetCovidHistoryError(error) {
  console.error(error)
}

handleGetVerseOneSuccess(data) {
  console.log("Page One Verses", data)
  var content = data.results[49].content
  var reference = data.results[49].reference
  var numbers626 = { content, reference }
  verseArray[0] = numbers626
}

handleGetVerseOneError(error) {
  console.error(error)
}

handleGetVerseTwoSuccess(data) {
  console.log("Page Two Verses", data)
  var content = data.results[65].content
  var reference = data.results[65].reference
  var psalm48 = { content, reference }
  verseArray[1] = psalm48
  content = data.results[96].content
  reference = data.results[96].reference
  var isaiah263 = { content, reference }
  verseArray[2] = isaiah263
}

handleGetVerseTwoError(error) {
  console.error(error)
}

handleGetVerseThreeSuccess(data) {
  console.log("Page Three Verses", data)
  var content = data.results[76].content
  var reference = data.results[76].reference
  var john1427 = { content, reference }
  verseArray[3] = john1427
  content = data.results[90].content
  reference = data.results[90].reference
  var romans51 = { content, reference }
  verseArray[4] = romans51
}

handleGetVerseThreeError(error) {
  console.error(error)
}

handleGetVerseFourSuccess(data) {
  console.log("Page Four Verses", data)
  var content = data.results[13].content
  var reference = data.results[13].reference
  var philippians12 = { content, reference }
  verseArray[5] = philippians12
  content = data.results[18].content
  reference = data.results[18].reference
  var colossians315 = { content, reference }
  verseArray[6] = colossians315
  return verseArray
}

handleGetVerseFourError(error) {
  console.error(error)
}

updateCurrentCovidStats(data) {
  currentActive.textContent = data.response[3].cases.active
  currentCritical.textContent = data.response[3].cases.critical
  currentRecovered.textContent = data.response[3].cases.recovered
  currentDeaths.textContent = data.response[3].deaths.total
}




function start(){

covidCurrent();

covidHistory();

getVerseOneSearch()

getVerseTwoSearch()

getVerseThreeSearch()

getVerseFourSearch()

}
}
