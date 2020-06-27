class CovidTable {
  constructor(table,
    errorMessage,
    currentActive,
    currentRecovered,
    currentDeaths,
    tested,
    confirmedCases,
    newCases,
    newDeaths,
    totalPopulation) {
    this.table = table
    this.errorMessage = errorMessage
    this.currentActive = currentActive
    this.currentRecovered = currentRecovered
    this.currentDeaths = currentDeaths
    this.tested = tested
    this.confirmedCases = confirmedCases
    this.newCases = newCases
    this.newDeaths = newDeaths
    this.totalPopulation = totalPopulation
  }


  hideTable(){
    this.errorMessage.classList.remove('d-none')
    this.table.classList.add('d-none')
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  beforeSendCovid() {
    this.tested.textContent = 'loading'
    this.confirmedCases.textContent = 'loading'
    this.newCases.textContent = 'loading'
    this.currentRecovered.textContent = 'loading'
    this.currentDeaths.textContent = 'loading'
    this.newDeaths.textContent = 'loading'
    this.totalPopulation.textContent = 'loading'
    this.currentActive.textContent = 'loading'
  }

  previousDayCovidStats(data) {
    this.currentActive.textContent = this.formatNumber(data.response[0].cases.active)
    this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
    this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
  }

  updateCurrentCovidStats(data) {
    this.tested.textContent = this.formatNumber(data.response[0].tests.total)
    this.confirmedCases.textContent = this.formatNumber(data.response[0].cases.total)
    this.newCases.textContent = this.formatNumber(data.response[0].cases.new)
    this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
    this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
    this.newDeaths.textContent = this.formatNumber(data.response[0].deaths.new)
    this.totalPopulation.textContent = this.formatNumber(data.response[0].population)
    this.currentActive.textContent = this.formatNumber(data.response[0].cases.active)
  }

  previewStatsPlaceholder() {
    this.currentActive.textContent = 'TBD'
    this.currentRecovered.textContent = 'TBD'
    this.currentDeaths.textContent = 'TBD'
  }

}
