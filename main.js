var h1 = document.querySelector("h1")
var table = document.querySelector("table")
var currentActive = document.getElementById("currentActive")
var currentCritical = document.getElementById("currentCritical")
var currentRecovered = document.getElementById("currentRecovered")
var currentDeaths = document.getElementById("currentDeaths")
var verseText = document.getElementById("verseText")
var verseRef = document.getElementById("verseRef")
var verseArray = []
var verseOfTheDay = null;

var currentDate = new Date();
var currentYear = currentDate.getFullYear().toString();
var currentMonth = (currentDate.getMonth() + 1).toString();
if (currentMonth.length === 1) {
  currentMonth = '0' + currentMonth;
}
var currentDay = currentDate.getDate().toString();
if (currentDay.length === 1) {
  currentDay = '0' + currentDay;
}
var formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;

var today = currentDate.getDay()



function covidHistory(){
  $.ajax({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history?country=USA",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
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
    success: handleGetVerseFourSuccess,
    error: handleGetVerseFourError
  })
}




function handleGetCovidCurrentSuccess(data){
  console.log("Current Covid Data", data)
  updateCurrentCovidStats(data)
    }

function handleGetCovidCurrentError(error){
  console.error(error)
}

function handleGetCovidHistorySuccess(data){
  console.log("History Covid Data", data)
}

function handleGetCovidHistoryError(error){
  console.error(error)
}

function handleGetVerseOneSuccess(data) {
  console.log("Page One Verses", data)
  var content = data.results[49].content
  var reference = data.results[49].reference
  var numbers626 = {content, reference}
  verseArray[0] = numbers626
}

function handleGetVerseOneError(error) {
  console.error(error)
}

function handleGetVerseTwoSuccess(data) {
  console.log("Page Two Verses", data)
  var content = data.results[65].content
  var reference = data.results[65].reference
  var psalm48 = { content, reference }
  verseArray[1] = psalm48
  content = data.results[96].content
  reference = data.results[96].reference
  var isaiah263 = {content, reference }
  verseArray[2] = isaiah263
}

function handleGetVerseTwoError(error) {
  console.error(error)
}

function handleGetVerseThreeSuccess(data) {
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

function handleGetVerseThreeError(error) {
  console.error(error)
}

function handleGetVerseFourSuccess(data) {
  console.log("Page Four Verses", data)
  var content = data.results[13].content
  var reference = data.results[13].reference
  var philippians12 = { content, reference }
  verseArray[5] = philippians12
  content = data.results[18].content
  reference = data.results[18].reference
  var colossians315 = { content, reference }
  verseArray[6] = colossians315
}

function handleGetVerseFourError(error) {
  console.error(error)
}

function verseOfTheDay(){
  verseOfTheDay = verseArray[today]
  verseText.textContent = verseOfTheDay.content
  verseRef.textContent = verseOfTheDay.reference
}

function updateCurrentCovidStats(data){
  currentActive.textContent = data.response[3].cases.active
  currentCritical.textContent = data.response[3].cases.critical
  currentRecovered.textContent = data.response[3].cases.recovered
  currentDeaths.textContent = data.response[3].deaths.total
  }




// function start(){

  covidCurrent();

  covidHistory();

  // getVerseOneSearch()

  // getVerseTwoSearch()

  // getVerseThreeSearch()

  // getVerseFourSearch()

// }



// start()












function consoleLogData(data) {
  console.log("AJAX Data GET: ", data)
  var span = h1.querySelector("span")
  // span.textContent = data.passages[0]
}


//31 Bible Verses
// 1. Numbers 6: 26 - (on page 1) data.results[49].content | data.results[49].reference

//   The LORD bless you and keep you;
// the LORD make his face to shine upon you and be gracious to you;
// the LORD lift up his countenance upon you and give you peace. (ESV)

// 2. Psalm 4: 8 - (on page 2) data.results[65].content | data.results[65].reference

// In peace I will both lie down and sleep;
// for you alone, O LORD, make me dwell in safety. (ESV)

// 3. Isaiah 26: 3 - (on page 2) data.results[96].content | data.results[96].reference

// You keep him in perfect peace whose mind is stayed on you, because he trusts in you.

// 4. John 14: 27 - (on page 3) data.results[76].content | data.results[96].reference
// Peace I leave with you; my Peace I give to you.Not as the world gives do I give to you.Let not your hearts be troubled, neither let them be afraid.

// 5. Romans 5: 1 - (on page 3) data.results[90].content | data.results[96].reference

//Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.

// 6. Philippians 1: 2 - (on page 4) data.results[13].content | data.results[13].reference
// Grace to you and peace from God our Father and the Lord Jesus Christ.

// 7. Colossians 3: 15 - (on page 4) data.results[18].content | data.results[18].reference
// And let the peace of Christ rule in your hearts, to which indeed you were called in one body.And be thankful.



//*To be used later in the project after the hackathon
// function getVerse(){
//   $.ajax({
//     method: "GET",
//     url: "https://api.esv.org/v3/passage/text/?q=John+11:35",
//     headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
//     data: { "include-passage-references": false, "include-verse-numbers": false, "include-short-copyright": false},
//     success: consoleLogData,
//     error: console.error
//   })
// }
