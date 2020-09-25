import React from 'react'
import styled from 'styled-components'

const SelectCodes = styled.select`
    color: skyblue;
    fontWeight: bold;
    margin: 15px; 
    padding: 5px; 
    borderRadius: 5px; 
    border: double;
    `
const Select = ({codes, setCode}) => {

    return (
        <div style={{display: 'inline-block', padding: '15px'}}>
            <label style={{color: 'white'}}>Search for Upcoming Movies in Your Country:</label>
            <br />
            <SelectCodes defaultValue={'default'} onChange={(e) => setCode(e.target.value)}>
            <option value="default" disabled>Choose a country...</option>
            {codes.map(code => <option key={code.iso_3166_1} value={code.iso_3166_1}>{code.english_name}</option>)}
            </SelectCodes>
        </div>
    )
}
export default Select