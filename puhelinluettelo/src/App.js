import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isPositive, setIsPositive] = useState(true)

  //Error message statea käytetään tässä sekä positiiviseen että
  //negatiiviseen viestiin, isPositive boolean vaihtaa tyyliä
  //Joko vihreään tai punaiseen.

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

  //Hakukenttään tulee arvoksi aina pienet kirjaimet
  const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleDeleteClick = id => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Removing contact ${personToRemove.name}. Are you sure? `)) {
      personService
        .remove(id)
        .then(promise => {
          setPersons(persons.filter(filtered => filtered.id !== id))
          if (promise.status === 204) {
            setIsPositive(true)
            setErrorMessage(`${personToRemove.name} was deleted from the database.`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 6000)
          }
        })
        .catch(error => {
          setIsPositive(false)
          console.log('Palvelimen palauttama error: ', error.response.data)
          setErrorMessage(
            ` ${error.response.data} OR ${personToRemove.name} may not have been deleted due unexpected error. Pls. check.`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 6000)
          //Koitetaan vielä ravistella sovellusta,
          //tai ainakin päivittää se ajantasalle sivun uudelleenlataamisella.
          window.location.reload()
        })
    }
  }

  //------ ADD ---------------------
  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber
    }
    const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    const changedContact = { ...person, number: newNumber }

    if (person) {
      //NIMI ON JO OLEMASSA...
      if (window.confirm(`NOTICE!\n ${newName} already exists.\n
      Want to permanently overwrite the old number?`)) {

        personService
          .update(person.id, changedContact)
          .then(res => {
            setPersons(persons.map(person => person.id !== res.id ? person : res))
            setIsPositive(true)
            setErrorMessage(
              `Number of '${contactObject.name}' was updated!`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 6000)
          })


          .catch(error => {
            setIsPositive(false)
            setErrorMessage(
              `${contactObject.name}' has been deleted just before you tried to update it.\r
              Maybe by some other user of the system.`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 6000)

          })
      }
    }
    else {
      //UUSI NIMI
      personService
        .create(contactObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setIsPositive(true)
          setErrorMessage(
            `New contact ${contactObject.name} was succesfully saved!`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log('Palvelimen error olio: ', error.response.data)
          setIsPositive(false)
          setErrorMessage(
            `Contact '${contactObject.name}' was not added to the server due unexpected error.`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 6000)

        })
    }
    //Lopuksi kaikissa tapauksissa tehdään.
    setNewName('')
    setNewNumber('')
  }

  /// RUUDULLE RENDEÖITÄVÄ KOMPONENTTIEN KOKOELMA ///
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addContact={addContact} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} />

      <h2>Numbers</h2>
      <Notification message={errorMessage} isPositive={isPositive} />

      <FilterForm search={search} handleSearchInputChange={handleSearchInputChange} />

      <Persons persons={persons} search={search}
        handleDeleteClick={handleDeleteClick} />

    </div>
  )
}

export default App