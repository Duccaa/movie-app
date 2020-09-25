import React from 'react'
import Filter from './Filter'
import Movie from './Movie'
import Select from './Select'
import styled from 'styled-components'

const Button = styled.button`
    borderRadius: 5px; 
    border: hidden;
    margin: 2px; 
    padding: 5px; 
    color: skyblue; 
    backgroundColor: white;
`
const P = styled.p`
    color: white;
    padding: 20px;
    textWeight: bold;
`
const Div = styled.div` 
    display: flex;
    justify-content: center; 
    margin: 15px;
`
const ActualList = (props) => {
const {arr, setCode, codes, filter, setFilter, setPending, setFavorite, page, setPage, totalPages} = props
    return (
        <div>
            <Select  setCode={setCode} codes={codes} />
            <Filter setFilter={setFilter} />  
            <Div>
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
            <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
            </Div>
            {
                arr.length === 0 ? 
                <P>'There are no movies yet'</P> 
                : 
                <Movie arr={arr} filter={filter} setFavorite={setFavorite} setPending={setPending} />
            }
        </div>
    )
}

export default ActualList