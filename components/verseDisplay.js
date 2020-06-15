class VerseDisplay{
  constructor(verseText, verseRef, dateHeader){
    this.verseText = verseText
    this.verseRef = verseRef
    this.dateHeader = dateHeader
  }

  beforeSendVerse(){
      this.verseText.textContent = 'loading'
      this.verseRef.textContent = 'loading'
  }

  previousVerseOfTheDay() {
  dateHeader.textContent = previousDayDate.toDateString()
  var previousVerseInfo = verseArray[yesterday]
  var formattedText = previousVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previousVerseInfo.reference
}

verseOfTheDay(verseObject) {
  dateHeader.textContent = currentDate.toDateString()
  var formattedText = verseObject.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = verseObject.reference
}

previewVerseOfTheDay() {
  dateHeader.textContent = previewDayDate.toDateString()
  var previewVerseInfo = verseArray[tomorrow]
  var formattedText = previewVerseInfo.content
  formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
  verseText.textContent = formattedText
  verseRef.textContent = previewVerseInfo.reference
}
}
