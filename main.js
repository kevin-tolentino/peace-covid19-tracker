var currentActive = document.getElementById("currentActive")
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
const currentErrorMessage = document.getElementById('currentErrorMessage')
const historyErrorMessage = document.getElementById('historyErrorMessage')
const table = document.getElementById('table')
const tested = document.getElementById('tested')
const confirmedCases = document.getElementById('confirmedCases')
const newCases = document.getElementById('newCases')
const newDeaths = document.getElementById('newDeaths')
const totalPopulation = document.getElementById('totalPopulation')
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
const covidTable = new CovidTable(table, currentErrorMessage, historyErrorMessage, currentActive, currentRecovered, currentDeaths, tested, confirmedCases, newCases, newDeaths, totalPopulation)
var covidTracker = new App(verseDisplay, covidTable, formattedPreviousDate, timer, previousDayDate, currentDate, previewDayDate, yesterday, today, tomorrow, currentRightDay, leftButton, middleButton, rightButton, currentLeftDay)
covidTracker.start()
