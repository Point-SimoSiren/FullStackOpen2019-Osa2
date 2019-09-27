import React from 'react'
import Country from './Country'

const Countries = ({ countries, search }) => {

    //Hakusyötettä verrataan API palvelusta countries nimiseen tilaan ladatun taulukon nimikenttiin.
    const searchMatches =
        countries.filter(country =>
            country.name.toLowerCase().includes(search.toLowerCase()))

    //Haun osumien määrän mukaan vaihtuva tapa näyttää maita
    const elementShowing = () => {

        if (searchMatches.length > 1 && searchMatches.length < 11) {

            return (searchMatches.map(country => <p key={country.name}> {country.name}</p>))
        }
        else if (searchMatches.length > 10) {
            return ('Search matches will be listed here.')

        }
        else {
            return (searchMatches.map(country => <Country key={country.name} country={country} />))
        }
    }
    return (
        elementShowing()
    )
}
export default Countries