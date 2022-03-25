import styled from 'styled-components';
import UserHeader from './UserHeader';
import MovieCard from './MovieCard'
import Footer from './Footer';

const Div = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 15px;
    align-items: center;
    flex-wrap: wrap;
`
const P = styled.p`
    color: white;
    padding-top: 100px;
    height: 50vh;
    font-weight: bold;
    @media (max-width: 260px){
        font-weight: normal;
        font-size: .8rem;
    }
`
const WatchList = ({arr,  setUser, setMovie}) => {

    // const DeleteMovie = (id) => {
    //     let temp = [...arr]
    //     temp.splice(temp.findIndex(el => el.id === id), 1)
    //     setPending(temp);
    // }

    return (
        <>
            <UserHeader setUser={setUser} />
            <Div>
                {
                    arr.length ?
                    arr.map(movie => (
                        <MovieCard key={movie.id} movie={movie} setMovie={setMovie}/>
                    ))
                    :
                    <P>'There are no movies on your watch list yet'</P> 
                }
            </Div>
            <Footer />
        </>
    )
}

export default WatchList;