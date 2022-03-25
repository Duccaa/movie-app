import { useNavigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import Footer from './Footer';
import '../index.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState} from 'react';
import { getSimilarMovies, getVideos, getDetails } from '../services/services.js';

const Container = styled.section`
    width: 80%;
    margin: 100px auto;
`
const Article = styled.article`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    @media (max-width: 687px) {
        flex-direction: column;
    }
`
const ImgDiv = styled.div`
    flex-basis: 45%;
`
const Div = styled.div`
    flex-basis: 50%;
`
const Img = styled.img`
    width: 100%;
    border-radius: 2rem;
`
const MovieTitle = styled.h2`
    font-size: 3rem;
    color: #d14;
    @media (max-width: 1022px) {
        font-size: 2.5rem;
    }
    @media (min-width: 687px) and (max-width: 855px) {
        font-size: 2rem;
    }
    @media (max-width: 436px) {
        font-size: 1.8rem;
    }
`
const Paragraph = styled.p`
    font-size: 1.3rem;
    media (max-width: 1022px) {
        font-size: 1rem;
    }
    media (max-width: 1022px) {
        font-size: 1rem;
    }
    @media (min-width: 687px) and (max-width: 855px) {
        font-size: .9rem;
    }
    @media (max-width: 436px) {
        font-size: .8rem;
    }
`
const Span = styled.span`
    color: #d14;
    display: inline-block;
    border-radius: 10px;
    padding: 4px 8px;
    border: 2px solid #d14;
    margin-left: 4px;
    @media (max-width: 436px) {
        font-size: .8rem;
    }
`
const Rating = styled.span`
    color: #d14;
`
const Button = styled.button`
    color: #d14;
    display: inline-block;
    border-radius: 10px;
    padding: 8px 16px;
    border: 2px solid #d14;
    margin-left: 4px;
    background: #0d253f;
    &:hover {
        color: #0d253f;
        background: #d14;
    }
`
const Hide = styled.span`
    color:#a01233;
`
const Section = styled.section`
    background-color: #fff;
`
const Title = styled.h3`
    font-size: 2.5rem;
    padding: 60px 0 0 30px ;
    margin-block-end: 0;
    color: #a01233;
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
    @media (max-width: 300px) {
        font-size: 1.5rem;
    }
`
const Movie = ({ movie, setUser, setMovie, pending, setPending }) => {

    const [similar, setSimilar] = useState([]);
    // const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    const [width, setWidth] = useState(0);
    const [genres, setGenres] = useState([]);
    const [active, setActive] = useState(false);
    const [string, setString] = useState('');
    const carousel = useRef();
    const imgLink = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
    // const videoLink = `https://www.youtube.com/watch?v=${video.key}`; 
    const placeholder = 'https://via.placeholder.com/400';
    const noImg = "https://image.tmdb.org/t/p/w400/null";

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

        getSimilarMovies(movie.id).then(res => {
            console.log(res.data.results);
            setSimilar(res.data.results);
        })

        getDetails(movie.id).then(res => {
            setGenres(res.data.genres)
        })

        getVideos(movie.id).then(res=>{
          console.log(res.data.results);
        //   setVideos(res.data.results);
          // dobije se array
          // id, key, name, published_at
          // problem sa cross-origin
        })
    }, [])

    const DeleteMovie = (id) => {
        let temp = [...pending]
        temp.splice(temp.findIndex(el => el.id === id), 1)
        setPending(temp);
    }

    return (
        <>
            <UserHeader setUser={setUser}/>
            <Container>
                <Article>
                    <ImgDiv>
                        <Img src={imgLink !== noImg ? imgLink : placeholder} alt="Movie_Poster"></Img>
                    </ImgDiv>
                    <Div>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <div> 
                            { genres.map(genre => 
                                <Span key={genre.id}>{genre.name}</Span>
                            )}                            
                        </div>
                        <Paragraph>Release date: &nbsp;&nbsp;{movie.release_date}</Paragraph>
                        <Paragraph>Sinopsis:</Paragraph>
                        <Paragraph>{movie.overview}</Paragraph>
                        <Paragraph>Rating score: &nbsp;&nbsp;<Rating>{movie.vote_average}</Rating></Paragraph>
                        <Div>
                                <Button 
                                onClick={() => {
                                    DeleteMovie(movie.id)
                                    setActive(true);
                                    setString('Removed');
                                    setTimeout(() => {
                                        setActive(false)
                                    }, 2500);
                                }}>Remove from Watch List</Button>
                                <Button
                                onClick={() => {
                                    setPending(prev => prev.some(el => el.id === movie.id) ? prev : [...prev, movie])
                                    setActive(true);
                                    setString('Added');
                                    setTimeout(() => {
                                        setActive(false)
                                    }, 2500);
                                }}>Add to Watch list</Button>
                                <div>
                                    <Hide className={active ? "": "hide"}>{string}</Hide>
                                </div>
                    </Div>
                    </ Div>
                </Article>
            </Container>    
            <Section>
                <Title>You May Also Like</Title>
                <article>
                    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                        <motion.div className="inner-carousel" drag="x" dragConstraints={{right: 0, left: -width }}>                    
                            {
                            similar.map(article =>
                                <motion.div className="item" key={article.id}
                                onClick={()=>{
                                    setMovie(article);
                                    navigate(`/${article.id}`)
                                }}
                                >
                                    <img 
                                    src={`https://image.tmdb.org/t/p/w400/${article.poster_path}`}
                                    alt="Movie Poster"
                                    />
                                </motion.div>                             
                            )
                            }
                        </motion.div>
                    </motion.div>                    
                </article>
            </Section> 
            <Footer />
        </>
    )
}

export default Movie;