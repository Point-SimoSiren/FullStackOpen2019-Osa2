import React from 'react'

const Persons = ({ persons, search }) => persons.map(person => {

    //Jos laittaa person.name[0] , niin hakee vain ensimmäistä kirjainta
    //mutta tämä on paljon parempi hakutapa.
    const caseInsensName = person.name.toLowerCase()
    return caseInsensName.indexOf(search) > -1 ? (
        <table key={person.id}>
            <tbody>
                <tr>
                    <td>{person.name} <span>&nbsp;</span></td>
                    <td>{person.phone}</td>
                </tr>
            </tbody>
        </table>
    ) : null
})
export default Persons