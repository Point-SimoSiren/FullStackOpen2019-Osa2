import React from 'react'
//Used for showing search field for filterig persons to show

const FilterForm = ({ search, handleSearchInputChange }) => {
    return (
        <div style={{ color: 'blue' }}>
            search: <input value={search} onChange={handleSearchInputChange} />
        </div>
    )
}
export default FilterForm