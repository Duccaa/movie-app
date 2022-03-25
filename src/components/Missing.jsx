import Footer from './Footer';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
    color: #fff;
    font-weight: bold;
    margin: 50px;
    padding: 50px;
`
const Missing = () => {
    return (
        <>
            <Section>
                <h1>Error: 404</h1>
                <h2>Page Not Found!</h2>
                <p>It looks like the page you search for do not exist</p>
                <p>Go back to <Link to="/">website</Link></p>
            </Section>
            <Footer></Footer>
        </>
    )
}

export default Missing;