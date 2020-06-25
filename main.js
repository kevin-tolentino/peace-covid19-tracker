var currentActive = document.getElementById("currentActive")
var currentCritical = document.getElementById("currentCritical")
var currentRecovered = document.getElementById("currentRecovered")
var currentDeaths = document.getElementById("currentDeaths")
var verseText = document.getElementById("verseText")
var verseRef = document.getElementById("verseRef")
var dateHeader = document.getElementById('date')
var timer = document.getElementById('timer')
var leftButton = document.getElementById('leftButton')
var currentRightDay = document.getElementById('currentRightDay')
var middleButton = document.getElementById('middleButton')
var rightButton = document.getElementById('rightButton')
var currentLeftDay = document.getElementById('currentLeftDay')
const errorMessage = document.getElementById('errorMessage')
const table = document.getElementById('table')
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


const verseDisplay = new VerseDisplay(verseText, verseRef, dateHeader, currentDate)
const covidTable = new CovidTable(table, currentActive, currentCritical, currentRecovered, currentDeaths)
var covidTracker = new App(verseDisplay, covidTable, formattedPreviousDate, timer, previousDayDate, currentDate, previewDayDate, yesterday, today, tomorrow, currentRightDay, leftButton, middleButton, rightButton, currentLeftDay, errorMessage)
covidTracker.start()
