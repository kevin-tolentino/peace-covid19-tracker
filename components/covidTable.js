class CovidTable {
  constructor(table, errorMessage, currentActive, currentCritical, currentRecovered, currentDeaths, tested, confirmedCases, newCases, newDeaths, totalPopulation) {
    this.table = table
    this.errorMessage = errorMessage
    this.currentActive = currentActive
    this.currentCritical = currentCritical
    this.currentRecovered = currentRecovered
    this.currentDeaths = currentDeaths
  }


  hideTable(){
    this.errorMessage.classList.remove('d-none')
    this.table.classList.add('d-none')
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  beforeSendCovid() {
    this.currentActive.textContent = 'loading'
    this.currentCritical.textContent = 'loading'
    this.currentRecovered.textContent = 'loading'
    this.currentDeaths.textContent = 'loading'
  }

  previousDayCovidStats(data) {
    this.currentActive.textContent = this.formatNumber(data.response[0].cases.active)
    this.currentCritical.textContent = this.formatNumber(data.response[0].cases.critical)
    this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
    this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
  }

  updateCurrentCovidStats(data) {
    this.currentActive.textContent = this.formatNumber(data.response[0].cases.active)
    this.currentCritical.textContent = this.formatNumber(data.response[0].cases.critical)
    this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
    this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
  }

  previewStatsPlaceholder() {
    this.currentActive.textContent = 'TBD'
    this.currentCritical.textContent = 'TBD'
    this.currentRecovered.textContent = 'TBD'
    this.currentDeaths.textContent = 'TBD'
  }

}
