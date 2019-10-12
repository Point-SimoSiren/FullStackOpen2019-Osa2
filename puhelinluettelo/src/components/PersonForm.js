import React from 'react'

// Used for adding new persons

const PersonForm = ({ addContact, newNumber, newName, handleNameInputChange, handleNumberInputChange }) => {
    return (

        <form onSubmit={addContact}>
            <div style={{ color: 'blue' }}>
                name: <span>&nbsp;&nbsp;</span> <input value={newName} onChange={handleNameInputChange} />
            </div>
            <div style={{ color: 'blue' }}>
                number: <input value={newNumber} onChange={handleNumberInputChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm