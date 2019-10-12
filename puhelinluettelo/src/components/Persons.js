import React from 'react'

const Persons = ({ persons, search, handleDeleteClick, handleUpdateClick }) => persons.map(person => {

    //Jos laittaa person.name[0] , niin hakee vain ensimmäistä kirjainta
    //mutta tämä on paljon parempi hakutapa.
    const caseInsensName = person.name.toLowerCase()
    return caseInsensName.indexOf(search) > -1 ? (
        <table key={person.id}>
            <tbody>
                <tr>
                    <td style={{ width: '100px' }}><button style={{ width: '80px' }}
                        onClick={() => handleDeleteClick(person.id)}>Delete</button></td>
                    <td style={{ width: '200px' }}>{person.name} <span>&nbsp;</span></td>
                    <td style={{ width: '150px' }}>{person.number}</td>
                </tr>
            </tbody>
        </table>
    ) : null
})
export default Persons