import styled from 'styled-components';
import img from '../img/blue_square_2.svg'

const SiteFooter = styled.footer`
    min-height: 50vh;
    width: 100%;
    background-color: #a01233;
    position: relative;
    left: 0;
    bottom: 0;
`
const Nav = styled.nav`
    padding-top: 100px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`
const Div = styled.div`
    flex-basis: 30%;
    text-align: center;
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`
const Img = styled.img`
    width: 50%;
    height: auto;
    display: inline-block;
`
const Ul = styled.ul`
    list-style: none;
    padding: 10px;
`
const Link = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    @media (max-width: 330px) {
        font-size: 1.1rem;
    }
`
const Footer = () => {
    return (
        <SiteFooter>
            <Nav>
                <Div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <div>
                            <Img src={`${img}`}/>
                        </div>
                    </a>    
                </Div>
                <Div>
                    <Ul>
                        <li><Link href="https://www.themoviedb.org/?language=us" target="_blank" rel="noopener noreferrer">TMDB Offical Website</Link></li>
                        <li><Link href="https://www.themoviedb.org/about?language=us" target="_blank" rel="noopener noreferrer">About TMDB</Link></li>
                    </Ul>
                </Div>
                <Div>
                    <Ul>
                        <li><Link href="https://www.themoviedb.org/documentation/api?language=us" target="_blank" rel="noopener noreferrer">TMDB API</Link></li>
                        <li><Link href="https://www.themoviedb.org/documentation/api/terms-of-use?language=us" target="_blank" rel="noopener noreferrer">API Terms of Use</Link></li>
                    </Ul>
                </Div>
            </Nav>
        </SiteFooter>
    )
}

export default Footer;