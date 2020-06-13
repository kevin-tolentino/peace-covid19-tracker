class VerseDisplay{
  constructor(verseText, verseRef){
    this.verseText = verseText
    this.verseRef = verseRef
  }

  beforeSendVerse(){
      this.verseText.textContent = 'loading'
      this.verseRef.textContent = 'loading'
  }
}
