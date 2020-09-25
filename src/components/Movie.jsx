import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
Modal.setAppElement('#root')

const Button = styled.button`
background-color: DarkCyan; 
color: white; 
border: none; 
border-radius: 5px; 
margin-right: 10px; 
padding: 5px;
`

const Movie = ({arr, filter, setPending }) => {

    const niz = arr.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
    const [modalIsOpen, setModalIsOpen] = useState((new Array(niz.length)).fill(false));

    const openModal = (i) => {
        let tmp = [...modalIsOpen]
        tmp[i] = true
        setModalIsOpen(tmp);
    }
    const closeModal = (i) => {
        console.log(i)
        setModalIsOpen(prev => {
            let tmp =[...prev]
            tmp[i]=false
            return  tmp
        });
        console.log(modalIsOpen);
    }

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '30px'}}>
            {
                niz.map((movie ,i) => 
                <div key={movie.id} style={{display: 'inline-block', backgroundColor: 'white', margin: '10px', padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', borderRadius: '5px', width: '14rem' }} >
                    <img  src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Movie_Poster" style={{padding: '3px', borderRadius: "10px", width: '13em', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                    <div style={{padding: '2px 16px'}}>
                        <p style={{color: 'DarkCyan', textAlign: 'center'}}>{movie.title}</p>
                        <Button onClick={() =>openModal(i)}>More</Button>
                    </div>            
                    <Modal 
                        isOpen={modalIsOpen[i]}
                        onRequestClose={() => closeModal(i)}
                        style={{
                            overlay: {
                                background: 'transparent'
                            },
                            content : {
                                display: 'flex',
                                alignItems: 'flex-start',
                                color: 'white',
                                backgroundImage: 'linear-gradient(to right, MediumAquaMarine, LightSeaGreen)'
                            }
                        }}>
                        <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Movie_Poster" style={{width: '20em'}}/>     
                        <div style={{marginLeft: '20px', padding: '10px'}}>
                            <h2 style={{color: 'DarkCyan'}}>{movie.title}</h2>
                            <p>Original title: {movie.original_title}</p>
                            <p>Original language: {movie.original_language}</p>
                            <p>Release date: {movie.release_date}</p>
                            <p>Owerview:</p> 
                            <p>{movie.overview}</p>
                            <Button onClick={() => {
                                setPending(prev => prev.some(el => el.id === movie.id) ? prev : [...prev, movie])
                            }}>Ad to Wach List</Button>
                        </div>
                        <Button onClick={() => closeModal(i)}>close</Button>
                    </Modal>
                </div>
            )}    
        </div>      
    )
}

export default Movie



