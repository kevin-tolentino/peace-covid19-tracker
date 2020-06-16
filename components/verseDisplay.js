class VerseDisplay {
  constructor(verseText, verseRef, dateHeader) {
    this.verseText = verseText
    this.verseRef = verseRef
    this.dateHeader = dateHeader
    this.previousVerseOfTheDay = this.previewVerseOfTheDay.bind(this)
  }

  beforeSendVerse() {
    this.verseText.textContent = 'loading'
    this.verseRef.textContent = 'loading'
  }

  previousVerseOfTheDay(verseArray, previousDayDate, yesterday) {
    this.dateHeader.textContent = previousDayDate.toDateString()
    var previousVerseInfo = verseArray[yesterday]
    var formattedText = previousVerseInfo.content
    formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
    this.verseText.textContent = formattedText
    this.verseRef.textContent = previousVerseInfo.reference
  }

  verseOfTheDay(verseObject, currentDate) {
    this.dateHeader.textContent = currentDate.toDateString()
    var formattedText = verseObject.content
    formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
    this.verseText.textContent = formattedText
    this.verseRef.textContent = verseObject.reference
  }

  previewVerseOfTheDay(verseArray, previewDayDate, tomorrow) {
    this.dateHeader.textContent = previewDayDate.toDateString()
    var previewVerseInfo = verseArray[tomorrow]
    var formattedText = previewVerseInfo.content
    formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
    this.verseText.textContent = formattedText
    this.verseRef.textContent = previewVerseInfo.reference
  }
}
