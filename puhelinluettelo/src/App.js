import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: '040-5441358' },
    { id: 2, name: 'Anja Kuusela', phone: '050-1365533' },
    { id: 3, name: 'Benjamin Sironen', phone: '050-0315823' },
    { id: 4, name: 'Dan Michaels', phone: '040-1361122' },
    { id: 5, name: 'Risto Rapia', phone: '050-1777533' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const found = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (found) {
      alert(`${newName} already exists. Cannot add, Sorry!.`)
    }
    else {
      const contactObject = {
        id: persons.length + 1,
        name: newName,
        phone: newNumber
      }
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addContact={addContact} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} />
      <h2>Numbers</h2>
      <FilterForm search={search} handleSearchInputChange={handleSearchInputChange} />

      <Persons persons={persons} search={search} />

    </div>
  )
}

export default App