import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'
import styled from 'styled-components'

const NavBar = styled.nav`
    height: 64px; 
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: rgb(3, 37, 65); 
`
const Img = styled.img`
    width: 5%; 
    margin-right: 15px;
`
const link = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
 
const Nav = ({setUser, user}) => {
    return (
        <NavBar>
            <Img src={`${link}`} alt="The Movie Database Logo" />
            {user ?
            <>
            <Link to="/popular" style={{padding: "10px", textDecoration: 'none', color: 'white'}}>| Movies |</Link>
            <Link to="/now_playing" style={{padding: "10px", textDecoration: 'none', color: 'white'}}>| Now in Cinemas |</Link>
            <Link to="/watch_list" style={{padding: "10px", textDecoration: 'none', color: 'white'}}>| My Watch List |</Link> 
            <SignOut setUser={setUser}/> 
            </>
             :
             <>
            <Link to="/signup" style={{padding: "10px", textDecoration: 'none', color: 'white'}}>| Sign Up |</Link>
            <Link to="/" style={{padding: "10px", textDecoration: 'none', color: 'white'}}>| Sign In |</Link>  
            </> 
            } 
        </NavBar>
    )
}
export default Nav