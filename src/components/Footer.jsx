import React from 'react'
import styled from 'styled-components'

// const Div = styled.div`
//     height: '64px', display: 'flex', 
//     justifyContent: center;
//     alignItems: center; 
//     backgroundColor: rgb(3, 37, 65); 
//     width: 100%;
// `
const Footer = () => {
    return (
        <div style={{height: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(3, 37, 65)',  position: 'static', bottom: '0', width: '100%'}}>
             <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" style={{width: '12%', marginRight: '15px'}}></img>
        </div>
    )
}
export default Footer