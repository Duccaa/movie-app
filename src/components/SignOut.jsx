import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 7px; 
    color: LightSeaGreen; 
    margin-left: 50px;  
    text-decoration: none;
    border: none;
    background: transparent;
`
const SignOut = (setUser) => {
    return (
        <Button onClick={() => setUser(false)}><a href="/login">SignOut</a></Button>
    )
}

export default SignOut