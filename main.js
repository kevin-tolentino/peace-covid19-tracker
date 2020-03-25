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

function getVerse(){
  $.ajax({
    method: "GET",
    url: "https://api.esv.org/v3/passage/text/?q=John+11:35",
    headers: { "Authorization": "4bb2afad133ab4a9531a4be06fd06ae85703cf0f" },
    data: { "include-passage-references": false, "include-verse-numbers": false, "include-short-copyright": false},
    success: consoleLogData,
    error: console.error
  })
}

getVerse()

function consoleLogData(data) {
  console.log(typeof data, data)
  var span = h1.querySelector("span")
  span.textContent = data.passages[0]
}
