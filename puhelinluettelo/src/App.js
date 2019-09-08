import React, { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }, { name: 'Anja Kuusela' }
  ])
  const [newName, setNewName] = useState('')

  const rows = () => persons.map(person =>
    <li
      key={person.name}>
      {person.name}
    </li>
  )

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName
    }

    setPersons(persons.concat(contactObject))
    setNewName('')
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