import React, { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }, { id: 2, name: 'Anja Kuusela' }
  ])
  const [newName, setNewName] = useState('')

  const rows = () => persons.map(person =>
    <li
      key={person.id}>
      {person.name}
    </li>
  )

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const found = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (found) {
      alert(`${newName} on jo olemassa ennestään.`)
    }
    else {
      const contactObject = {
        id: persons.length + 1,
        name: newName
      }
      setPersons(persons.concat(contactObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {rows()}
        </ul>
      </div>
    </div>
  )
}

export default App