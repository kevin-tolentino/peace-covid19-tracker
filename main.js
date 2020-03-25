// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://covid-193.p.rapidapi.com/statistics",
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "covid-193.p.rapidapi.com",
//     "x-rapidapi-key": "c857e751dfmsh459b4184fde79f2p1e3cbdjsn082cb4dee5cd"
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

// Authorization: Token {{ YOUR_KEY }}
var h1 = document.querySelector("h1")

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

function getVerseSearch() {
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/search/?q=peace",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "page-size": 100, "page": 4},
    success: consoleLogData,
    error: console.error
  })
}

getVerseSearch()

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

// 4. John 14: 27 - (on page 3) data.results[96].content | data.results[96].reference
// Peace I leave with you; my Peace I give to you.Not as the world gives do I give to you.Let not your hearts be troubled, neither let them be afraid.

// 5. Romans 5: 1 - (on page 3) data.results[96].content | data.results[96].reference

//Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.

// 6. Philippians 1: 2 - (on page 4) data.results[13].content | data.results[13].reference
// Grace to you and peace from God our Father and the Lord Jesus Christ.

// 7. Colossians 3: 15 - (on page 4) data.results[18].content | data.results[18].reference
// And let the peace of Christ rule in your hearts, to which indeed you were called in one body.And be thankful.
