class CovidTable {
  constructor(currentActive, currentCritical, currentRecovered, currentDeaths) {
    this.currentActive = currentActive
    this.currentCritical = currentCritical
    this.currentRecovered = currentRecovered
    this.currentDeaths = currentDeaths
  }

  formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  beforeSendCovid(){
    this.currentActive.textContent = 'loading'
    this.currentCritical.textContent = 'loading'
    this.currentRecovered.textContent = 'loading'
    this.currentDeaths.textContent = 'loading'
  }

  PreviousDayCovidStats(data) {
  this.currentActive.textContent = this.formatNumber(data.response[0].cases.active)
  this.currentCritical.textContent = this.formatNumber(data.response[0].cases.critical)
  this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
  this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
}
}
