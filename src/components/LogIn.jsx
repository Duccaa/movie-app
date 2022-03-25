import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import img from '../img/bg-img.jpg';
import { motion } from 'framer-motion';
import '../index.css';
import WelcomeHeader from './WelcomeHeader';
import LoginForm from './LoginForm';
import Footer from './Footer'; 


const WelcomeSection = styled.section`
    background-image: linear-gradient(rgba(255, 255, 255, .6), rgba(255, 255, 255, .1)), url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    height: 75vh;
    font-weight: bold;
`
const WelcomeArticle = styled.article`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Welcome = styled.h1`
    font-size: 2.5rem;
    color: #a01233;
    margin-block-end: 0;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`
const Intro = styled.p`
    font-size: 1.5rem;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const Section = styled.section`
    background-color: #0d253f;
`

const Title = styled.h2`
    font-size: 2.5rem;
    padding: 60px 0 0 30px ;
    margin-block-end: 0;
    margin-block-start: 0;
    color: #a01233;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`
const LogIn = ({ popularMovies, users, setUser }) => {

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(()=> {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[])

    return (
        <>
            <WelcomeHeader/>

            <WelcomeSection>
                <WelcomeArticle>
                    <Welcome>Welcome to The Movie Database</Welcome>
                    <Intro>Search for millions of movies around the world.</Intro>  
                    <LoginForm users={users} setUser={setUser}></LoginForm>
                </WelcomeArticle>
            </WelcomeSection>    

            <Section>
                <article>
                    <Title>Trending Now</Title>
                    <motion.div ref={carousel} className="carouselWelcome" whileTap={{cursor: "grabbing"}}>
                        <motion.div className="inner-carousel" drag="x" dragConstraints={{right: 0, left: -width }}>                    
                            {
                                popularMovies.map(movie =>
                                <motion.div className="item" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Movie Poster" />
                                </motion.div>)
                            }
                        </motion.div>
                    </motion.div>                    
                </article>
            </Section>

            <Footer />
        </>
    )
}

export default LogIn