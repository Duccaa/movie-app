import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    width: 310px;
    height: 460px;
    margin: 1rem;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);width: 310px;
    &:hover {
        box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
        transform: scale(1.05, 1.05);
    }
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`
const DateDiv = styled.div`
    position: absolute;
    padding: 16px;
    width: 100%;
    top: 0;
    color: #d14;
`
const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
    &:hover {
        height: 100%;
        opacity: 0.3;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
const TitleDiv = styled.div`
    z-index: 2;
    background-color: #d14;
    padding: 16px 24px 24px 24px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`
const Title = styled.h2`
    color: #0d253f;
    font-size: 1rem;
`

const MovieCard = ({ movie, setMovie }) => {
    const imgLink = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
    const noImg = "https://image.tmdb.org/t/p/w400/null";
    const placeholder = 'https://via.placeholder.com/400';
    let navigate = useNavigate();
    return (

            <Card key={movie.id} onClick={()=>{
                setMovie(movie);
                navigate(`/${movie.id}`)
            }}>
                <DateDiv>
                    <p>{movie.release_date}</p>
                </DateDiv>
                <ImgDiv>
                    <Img src={imgLink !== noImg ? imgLink : placeholder} alt="Movie Poster" />
                </ImgDiv>
                <TitleDiv>
                    <Title>{movie.title}</Title>
                </TitleDiv>  
            </Card>
    )
}

export default MovieCard;