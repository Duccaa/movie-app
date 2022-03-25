import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../img/blue_long_2.svg'

const TopBar = styled.header`
    background-color: #a01233;
    height: 10vh;
`
const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
const Logo = styled.div`
    flex-basis: 25%;
    padding-left: 25px;
    @media (max-width: 515px) {
        flex-basis: 80%;
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
        display: none;
    }
`
const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content: flex-end;
`
const Li = styled.li`
    flex-basis: 20%;
    text-align: center;
` 
const styledLinks = {
    color: "#fff",
    textDecoration: "none",
}
const WelcomeHeader = () => {
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
                        <Li><Link to="/login" style={styledLinks}>Log in</Link></Li>
                        <Li><Link to="/" style={styledLinks}>Sign up</Link></Li>
                    </Ul>
                </Div>
            </Nav>
        </TopBar>
    )
}

export default WelcomeHeader;