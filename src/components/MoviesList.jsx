import React from 'react';
import UserHeader from './UserHeader';
import Filter from './Filter';
import MovieCard from './MovieCard';
import Footer from './Footer';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 10px;
    padding: 4px 8px;
    border: 2px solid #d14; 
    margin: 2px; 
    color: #d14; 
    background-color: #0d253f;
    &:hover {
        background-color: #d14;
        color: #0d253f;
    };
    &:disabled {
        display: none;
    }
`
const Div = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 15px;
    align-items: center;
    flex-wrap: wrap;
`
const MoviesList = (props) => {

    const {arr, filter, setFilter, page, setPage, totalPages,  setUser, setMovie} = props;
    const niz = arr.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
    return (
        <>
            <UserHeader setUser={setUser}/>
            <div>
                <Filter setFilter={setFilter} />  
                <Div>
                    <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                    <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
                </Div>
                <Div>
                    {
                        niz.map(movie => (
                            <MovieCard key={movie.id} movie={movie} setMovie={setMovie}/>
                        ))
                    }
                </Div>
            </div>
            <Footer />
        </>
    )
}

export default MoviesList