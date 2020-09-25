import React from 'react'
import Sort from './Sort.jsx'
import Filter from './Filter'
import Movie from './Movie'
import styled from 'styled-components'

const Button = styled.button`
    borderRadius: 5px; 
    border: hidden;
    margin: 2px; 
    padding: 5px; 
    color: skyblue; 
    backgroundColor: white;
`
const Div = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 15px;
`
const MovieList = (props) => {
    const {arr, filter, setFilter, setPopular, page, setPage, totalPages, setPending, setFavorite} = props
    return (
        <div>
            {/* <Sort arr={arr} setPopular={setPopular}/> */}
            <Filter setFilter={setFilter} />  
            <Div>
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
            </Div>
            <Movie arr={arr} filter={filter} setFavorite={setFavorite} setPending={setPending} />
        </div>
    )
}

export default MovieList