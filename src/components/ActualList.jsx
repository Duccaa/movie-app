import UserHeader from './UserHeader';
import Filter from './Filter';
import MovieCard from './MovieCard';
import Select from './Select';
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
const P = styled.p`
    color: white;
    padding: 20px;
    font-weight: bold;
    @media (max-width: 260px){
        font-weight: normal;
        font-size: .8rem;
    }
`
const Div = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 40px 5px;
    align-items: center;
    flex-wrap: wrap;
`
const ActualList = (props) => {
    const {arr, setCode, codes, filter, setFilter, page, setPage, totalPages, setUser, setMovie} = props;
    const niz = arr.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
    return (
        <>
            <UserHeader setUser={setUser}/>
            <section>
                <Div>
                    <Select  setCode={setCode} codes={codes} />
                    <Filter setFilter={setFilter} />    
                </Div>

                <Div>
                    <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                    <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
                </Div>

                <Div>
                    {                   
                        niz.length === 0 ? 
                        <P>'There are no movies yet'</P> 
                        : 
                        niz.map(movie => (
                            <MovieCard key={movie.id} movie={movie} setMovie={setMovie} />
                        ))
                    }
                </Div>
            </section>
            <Footer />
        </>
    )
}

export default ActualList