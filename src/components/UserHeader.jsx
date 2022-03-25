import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../img/blue_long_2.svg';
import LogOut from './LogOut';

const TopBar = styled.header`
    background-color: #a01233;
    min-height: 10vh;
    margin-bottom: 70px;
`
const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media (max-width: 585px) {
        justify-content: center;
        flex-flow: row wrap;
    }
`
const Logo = styled.div`
    flex-basis: 25%;
    padding-left: 25px;
    @media (max-width: 585px) {
        flex-basis: 80%;
        padding: 10px;
        padding-top: 20px;
        padding-left: 0;
    }
`
const Img = styled.img`
    width: 100%;
`
const Div = styled.div`
    flex-basis: 70%;
    padding-right: 40px;
    color: #fff;
    @media (max-width: 515px) {
        flex-basis: 95%;
    }
`
const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
`
const Li = styled.li`
    flex-basis: 24%;
    text-align: center;
    @media (max-width: 515px) {
        flex-basis: 25%;
        font-size: .8rem;
    }
` 
const styledLinks = {
    color: "#fff",
    textDecoration: "none",
}
const UserHeader = ({setUser}) => {
    return (
        <TopBar>
            <Nav>
                <Logo>
                    <a href="https://www.themoviedb.org/?language=us" target="_blank" rel="noopener noreferrer">
                        <Img src={img} alt="" />
                    </a>
                </Logo>
                <Div>
                    <Ul>
                        <Li><Link to="/" style={styledLinks}>Movies</Link></Li>
                        <Li><Link to="/actual" style={styledLinks}>In Cinemas</Link></Li>
                        <Li><Link to="/watch" style={styledLinks}>Watch List</Link></Li>
                        <Li><LogOut setUser={setUser}/></Li>
                    </Ul>
                </Div>
            </Nav>
        </TopBar>
    )
}

export default UserHeader;