import React from 'react'
//Used for showing search field for filterig countries to show

const FilterForm = ({ search, handleSearchInputChange }) => {
    return (
        <div style={{ color: 'blue' }}>
            search country by name: <input value={search} onChange={handleSearchInputChange} />
        </div>
    )
}
export default FilterForm