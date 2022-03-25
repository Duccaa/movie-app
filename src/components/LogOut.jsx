import styled from 'styled-components';

const Button = styled.button` 
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    &:focus {
        border: none;
    }
`
const LogOut = ({setUser}) => {
    return (
        <Button onClick={() => setUser(false)}>Log Out</Button>
    )
}

export default LogOut;