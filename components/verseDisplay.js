class VerseDisplay {
  constructor(verseDisplayDiv, verseErrorMessage, verseText, verseRef, dateHeader) {
    this.verseDisplayDiv = verseDisplayDiv
    this.verseErrorMessage = verseErrorMessage
    this.verseText = verseText
    this.verseRef = verseRef
    this.dateHeader = dateHeader
    this.previousVerseOfTheDay = this.previewVerseOfTheDay.bind(this)
  }

  verseErrorHandle() {
    this.verseErrorMessage.classList.remove('d-none')
    this.verseDisplayDiv.classList.add('d-none')
  }

  retryVerseHandle() {
    this.verseErrorMessage.classList.add('d-none')
    this.verseDisplayDiv.classList.remove('d-none')
  }

  beforeSendVerse() {
    this.verseText.textContent = 'loading'
    this.verseRef.textContent = 'loading'
  }

  previousVerseOfTheDay(verseArray, previousDayDate, yesterday) {
    this.dateHeader.textContent = previousDayDate.toDateString()
    const previousVerseInfo = verseArray[yesterday]
    let formattedText = previousVerseInfo.content
    formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
    this.verseText.textContent = formattedText
    this.verseRef.textContent = `(${previousVerseInfo.reference})`
  }

  verseOfTheDay(verseObject, currentDate) {
    this.dateHeader.textContent = currentDate.toDateString()
    let formattedText = verseObject.content
    formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
    this.verseText.textContent = formattedText
    this.verseRef.textContent = `(${verseObject.reference})`
  }

  previewVerseOfTheDay(verseArray, previewDayDate, tomorrow) {
    this.dateHeader.textContent = previewDayDate.toDateString()
    const previewVerseInfo = verseArray[tomorrow]
    let formattedText = previewVerseInfo.content
    formattedText = formattedText[0].toUpperCase() + formattedText.slice(1)
    this.verseText.textContent = formattedText
    this.verseRef.textContent = `(${previewVerseInfo.reference})`
  }
}
