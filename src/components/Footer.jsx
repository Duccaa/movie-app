import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    height: 64px; 
    display: flex; 
    justify-content: center;
    align-items: center; 
    background-color: rgb(3, 37, 65); 
    position: static;
    bottom: 0,
    width: 100%;
`
const link = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
const Footer = () => {
    return (
        <Div>
             <img src={`${link}`} alt="The Movie Database (TMDb)" style={{width: '12%', marginRight: '15px'}}></img>
        </Div>
    )
}
export default Footer