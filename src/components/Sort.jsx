import React, { useState, useEffect }from 'react'
import styled from 'styled-components'

const Select = styled.select`
    color: skyblue; 
    margin: 15px;
    padding: 5px; 
    borderRadius: 5px; 
    border: double;
`
const Div = styled.div`
    display: inline-block; 
    margin: 15px;
`
const Sort = ({arr, setPopular}) => {

    const [sortType, setSortType] = useState('popularity')

    useEffect(() => {    
        const sorted = [...arr].sort((a, b) => b[sortType] - a[sortType]);
        setPopular(sorted);   
    }, [sortType]); 
  
    return (
        <Div>
            <label style={{color: 'white'}}>Sort Results By:</label>
            <Select onChange={(e) => setSortType(e.target.value)}>
                <option value="popularity">Popularity</option>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </Select>
        </Div>
    )
}

export default Sort