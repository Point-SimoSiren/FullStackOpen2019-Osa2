import React from 'react'

const Country = ({ country }) => {
    return (<div key={country.name}>
        <p style={{ color: 'blue', fontSize: '20px' }}>x~~~~x~~~~x~~~~x~~~~x~~~~x~~~~x~~~~x</p>
        <p style={{ fontSize: '30px' }}>{country.name}</p>
        <table>
            <tbody>
                <tr>
                    <td style={{ width: '100px' }}>Region:</td>
                    <td style={{ width: '300px' }}>{country.region}</td>
                </tr>
                <tr>
                    <td style={{ width: '100px' }}>Capital:</td>
                    <td style={{ width: '300px' }}>{country.capital}</td>
                </tr>
                <tr>
                    <td style={{ width: '100px' }}>Population:</td>
                    <td style={{ width: '300px' }}>{(country.population / 1000000).toFixed(1)} Million</td>
                </tr>
                <tr>
                    <td style={{ width: '100px' }}>Major Language:</td>
                    <td style={{ width: '300px' }}>{country.languages[0].name}</td>
                </tr>
            </tbody>
        </table>
        <img width='250px' src={country.fla} alt='Flag couldn´t be loaded. Sorry for that.' />
        <p style={{ color: 'blue', fontSize: '20px' }}>x~~~~x~~~~x~~~~x~~~~x~~~~x~~~~x~~~~x</p>
    </div>);
}

export default Country