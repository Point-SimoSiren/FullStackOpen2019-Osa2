import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value)
  }

  const handleDeleteClick = id => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Removing contact ${personToRemove.name}. Are you sure? `)) {
      personService
        .remove(id)
        .then(promise => {
          setPersons(persons.filter(filtered => filtered.id !== id))
          if (promise.status === 200) {
            alert(`CONFIRMATION:\n ${personToRemove.name} was deleted from the database.`)
          }
        })
    }
  }
  //------ ADD ---------------------
  const addContact = (event, id) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber
    }
    const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    const changedContact = { ...person, number: newNumber }
    //Tulostus näyttää vanhan ja uuden version json objectina
    console.log(person)
    console.log(changedContact)

    if (person) {
      //NIMI ON JO OLEMASSA...
      if (window.confirm(`NOTICE!\n ${newName} already exists.\n
      Want to permanently overwrite the old number?`)) {
        personService
          .update(person.id, changedContact)
          .then(res => {
            setPersons(persons.map(person => person.id !== res.id ? person : res))
          })
      }
    }
    else {
      //UUSI NIMI
      personService
        .create(contactObject)
        .then(response => {
          setPersons(persons.concat(response.data))

        })
    }
    //Lopuksi kaikissa tapauksissa:
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addContact={addContact} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} />
      <h2>Numbers</h2>
      <FilterForm search={search} handleSearchInputChange={handleSearchInputChange} />

      <Persons persons={persons} search={search} handleDeleteClick={handleDeleteClick} />

    </div>
  )
}

export default App