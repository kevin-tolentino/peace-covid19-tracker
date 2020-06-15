class CovidTable {
  constructor(currentActive, currentCritical, currentRecovered, currentDeaths) {
    this.currentActive = currentActive
    this.currentCritical = currentCritical
    this.currentRecovered = currentRecovered
    this.currentDeaths = currentDeaths
  }

  beforeSendCovid(){
    this.currentActive.textContent = 'loading'
    this.currentCritical.textContent = 'loading'
    this.currentRecovered.textContent = 'loading'
    this.currentDeaths.textContent = 'loading'
  }
}
