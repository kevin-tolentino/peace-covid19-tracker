class VerseDisplay{
  constructor(verseText, verseRef, dateHeader, yesterday, today, tomorrow){
    this.verseText = verseText
    this.verseRef = verseRef
    this.dateHeader = dateHeader
    this.yesterday = yesterday
    this.today = today
    this.tomorrow = tomorrow
  }

  beforeSendVerse(){
      this.verseText.textContent = 'loading'
      this.verseRef.textContent = 'loading'
  }

  previousVerseOfTheDay() {
  this.dateHeader.textContent = previousDayDate.toDateString()
  var previousVerseInfo = verseArray[yesterday]
  var formattedText = previousVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previousVerseInfo.reference
}

verseOfTheDay(verseObject) {
  this.dateHeader.textContent = currentDate.toDateString()
  var formattedText = verseObject.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = verseObject.reference
}

previewVerseOfTheDay() {
  this.dateHeader.textContent = previewDayDate.toDateString()
  var previewVerseInfo = verseArray[tomorrow]
  var formattedText = previewVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previewVerseInfo.reference
}
}
