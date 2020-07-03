class CovidTable {
  constructor(table,
    currentErrorMessage,
    historyErrorMessage,
    currentActive,
    currentRecovered,
    currentDeaths,
    tested,
    confirmedCases,
    newCases,
    newDeaths,
    totalPopulation) {
    this.table = table
    this.currentErrorMessage = currentErrorMessage
    this.historyErrorMessage = historyErrorMessage
    this.currentActive = currentActive
    this.currentRecovered = currentRecovered
    this.currentDeaths = currentDeaths
    this.tested = tested
    this.confirmedCases = confirmedCases
    this.newCases = newCases
    this.newDeaths = newDeaths
    this.totalPopulation = totalPopulation
  }


  currentErrorHandle(){
    this.currentErrorMessage.classList.remove('d-none')
    this.table.classList.add('d-none')
  }

  retryCurrentHandle(){
    this.currentErrorMessage.classList.add('d-none')
    this.table.classList.remove('d-none')
  }

  historyErrorHandle() {
    this.historyErrorMessage.classList.remove('d-none')
    this.table.classList.add('d-none')
  }

  retryHistoryHandle() {
    this.historyErrorMessage.classList.add('d-none')
    this.table.classList.remove('d-none')
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
    const population = data.response[0].population
    const confirmed = data.response[0].cases.total
    const active = data.response[0].cases.active
    const critical = data.response[0].cases.critical
    this.tested.textContent = this.formatNumber(data.response[0].tests.total)
    this.confirmedCases.textContent = this.formatNumber(confirmed)
    this.newCases.textContent = this.formatNumber(data.response[0].cases.new)
    this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
    this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
    this.newDeaths.textContent = this.formatNumber(data.response[0].deaths.new)
    this.totalPopulation.textContent = `${((confirmed / population) * 100).toFixed(2)}% of U.S. population had the COVID-19 Virus.`
    this.currentActive.textContent = `Of the ${this.formatNumber(active)} Active COVID-19 cases, ${((critical / active) * 100).toFixed(2)}% were in critical condition.`
  }

  updateCurrentCovidStats(data) {
    const population = data.response[0].population
    const confirmed = data.response[0].cases.total
    const active = data.response[0].cases.active
    const critical = data.response[0].cases.critical
    this.tested.textContent = this.formatNumber(data.response[0].tests.total)
    this.confirmedCases.textContent = this.formatNumber(confirmed)
    if (data.response[0].cases.new){
      this.newCases.textContent = this.formatNumber(data.response[0].cases.new)
    } else {
      this.newCases.classList.add('d-none')
    }
    this.currentRecovered.textContent = this.formatNumber(data.response[0].cases.recovered)
    this.currentDeaths.textContent = this.formatNumber(data.response[0].deaths.total)
    if (data.response[0].deaths.new) {
      this.newDeaths.textContent = this.formatNumber(data.response[0].deaths.new)
    } else {
      this.newDeaths.classList.add('d-none')
    }

    this.totalPopulation.textContent = `${((confirmed / population) * 100).toFixed(2)}% of U.S. population has the COVID-19 Virus.`
    this.currentActive.textContent = `Of the ${this.formatNumber(active)} Active COVID-19 cases, ${((critical / active) * 100).toFixed(2)}% are in critical condition.`
  }

  previewStatsPlaceholder() {
    this.tested.textContent = 'TBD'
    this.confirmedCases.textContent = 'TBD'
    this.newCases.textContent = 'TBD'
    this.currentRecovered.textContent = 'TBD'
    this.currentDeaths.textContent = 'TBD'
    this.newDeaths.textContent = 'TBD'
    this.totalPopulation.textContent = 'TBD'
    this.currentActive.textContent = 'TBD'
  }

}
