import React, { useState, useEffect } from 'react';
import countriesService from './services/countries'
import FilterForm from './components/FilterForm'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div style={{ marginLeft: '50px' }}>
      <h1 style={{ color: 'red' }}>COUNTRY SEARCH</h1>
      <FilterForm search={search} handleSearchInputChange={handleSearchInputChange} />
      <Countries countries={countries} search={search} />
    </div>
  )
}

export default App;
