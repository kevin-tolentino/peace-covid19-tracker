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
    // data: { "include-verse-numbers": false },
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

// JSON.parse(data)

// function consoleLogData(data) {
//   console.log("Data from get: ", data.passages[0])
// }


// $.ajax({
//   method: "GET",
//   url: "https://jsonplaceholder.typicode.com/users",
//   success: function postDataOnDOM(data) {
//     console.log("data from get: ", data)
//     for (var arrayCounter = 0; arrayCounter < data.length; arrayCounter++) {
//       var tableData1 = document.createElement("td")
//       tableData1.textContent = data[arrayCounter]["id"]
//       var tableData2 = document.createElement("td")
//       tableData2.textContent = data[arrayCounter]["name"]
//       var tableData3 = document.createElement("td")
//       tableData3.textContent = data[arrayCounter]["email"]
//       var tableRow = document.createElement("tr")
//       tableRow.appendChild(tableData1)
//       tableRow.appendChild(tableData2)
//       tableRow.appendChild(tableData3)
//       tBody.appendChild(tableRow)
//     }



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

// info for COVID 19 API
//https://api-sports.io/documentation/covid-19#section/Authentication



//API Info for WEB Bible from API
// {
//   "id": "105a06b6146d11e7-01",
//     "name": "English - World English Bible (NT)",
//       "nameLocal": "English - World English Bible (NT)",
//         "dblId": "105a06b6146d11e7"
// }
//       ]
//     },
// {
//   "id": "9879dbb7cfe39e4d-04",

//     "dblId": "9879dbb7cfe39e4d",
//       "relatedDbl": null,
//         "name": "World English Bible",
//           "nameLocal": "World English Bible",
//             "abbreviation": "WEB",
//               "abbreviationLocal": "WEB",
//                 "description": "Protestant",
//                   "descriptionLocal": "Protestant",
//                     "language": {
//     "id": "eng",
//       "name": "English",
//         "nameLocal": "English",
//           "script": "Latin",
//             "scriptDirection": "LTR"
//   },
//   "countries": [
//     {
//       "id": "US",
//       "name": "United States",
//       "nameLocal": "United States"
//     }
//   ],
//     "type": "text",
//       "updatedAt": "2020-03-16T20:50:36.000Z",
//         "audioBibles": [
//           {
