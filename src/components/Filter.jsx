import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    color: skyblue; 
    padding: 5px; 
    borderRadius: 5px; 
    border: double;
`
const Div = styled.div`
    display: inline-block;
    margin: 15px;
`
const Filter = ({ setFilter }) => {
    return(
        <Div> 
            <Input placeholder="Search Movie by Name..." onChange={(e) => setFilter(e.target.value)}/>
        </Div>
    )
}

export default Filter