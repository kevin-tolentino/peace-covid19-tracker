const retryCurrentGet = document.getElementById('retryCurrentGet')
const retryHistoryGet = document.getElementById('retryHistoryGet')
const footer = document.getElementById('footer')
const currentActive = document.getElementById("currentActive")
const currentRecovered = document.getElementById("currentRecovered")
const currentDeaths = document.getElementById("currentDeaths")
const verseDisplayDiv = document.getElementById("verseDisplay")
const verseErrorMessage = document.getElementById('verseErrorMessage')
const retryVerseGet = document.getElementById('retryVerseGet')
const verseText = document.getElementById("verseText")
const verseRef = document.getElementById("verseRef")
const dateHeader = document.getElementById('date')
const timer = document.getElementById('timer')
const leftButton = document.getElementById('leftButton')
const currentRightDay = document.getElementById('currentRightDay')
const middleButton = document.getElementById('middleButton')
const rightButton = document.getElementById('rightButton')
const currentLeftDay = document.getElementById('currentLeftDay')
const currentErrorMessage = document.getElementById('currentErrorMessage')
const historyErrorMessage = document.getElementById('historyErrorMessage')
const table = document.getElementById('table')
const tested = document.getElementById('tested')
const confirmedCases = document.getElementById('confirmedCases')
const newCases = document.getElementById('newCases')
const newDeaths = document.getElementById('newDeaths')
const totalPopulation = document.getElementById('totalPopulation')
const currentDate = new Date();
let previousDayDate = new Date();
previousDayDate.setDate(previousDayDate.getDate() - 1);
let previewDayDate = new Date()
previewDayDate.setDate(previewDayDate.getDate() + 1);
let yesterdayYear = previousDayDate.getFullYear().toString();
let yesterdayMonth = (previousDayDate.getMonth() + 1).toString();

if (yesterdayMonth.length === 1) {
  yesterdayMonth = '0' + yesterdayMonth;
}
let yesterdayDay = (previousDayDate.getDate().toString());
if (yesterdayDay.length === 1) {
  yesterdayDay = '0' + yesterdayDay;
}
const formattedPreviousDate = `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}`;

const today = currentDate.getDay()
const yesterday = today - 1
const tomorrow = (today === 6) ? 0 : (today + 1)

const verseDisplay = new VerseDisplay(verseDisplayDiv, verseErrorMessage, verseText, verseRef, dateHeader, currentDate)
const covidTable = new CovidTable(table, currentErrorMessage, historyErrorMessage, currentActive, currentRecovered, currentDeaths, tested, confirmedCases, newCases, newDeaths, totalPopulation)
const covidTracker = new App(retryCurrentGet, retryHistoryGet, retryVerseGet, footer, verseDisplay, covidTable, formattedPreviousDate, timer, previousDayDate, currentDate, previewDayDate, yesterday, today, tomorrow, currentRightDay, leftButton, middleButton, rightButton, currentLeftDay)
covidTracker.start()
