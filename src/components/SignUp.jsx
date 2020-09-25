import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
display: block; 
padding: 5px; 
margin: 5px;
color:  DarkCyan; 
border-radius: 3px; 
border: double;
`
const InputButton = styled(Input)`
    background-color: DarkCyan; 
    color: white;
    border: none; 
    border-radius: 2px; 
`
const Div = styled.div`
padding: 40px; 
height: 1100px;
background-image: url(https://i.imgur.com/sb0IFAC.jpg);
background-repeat: no-repeat; 
background-size: cover;
`

const SignUp = () => {
    return(
        <Div>
        <h1 style={{color: 'darkcyan'}}>Welcome to The Movie Database.</h1>
        <h3 style={{color: 'white'}}>To dive into the world of millions of movies SignUp or <a href="/login" style={{ color: 'darkcyan'}}>SignIn</a> now.</h3>
        <form style={{margin: '50px'}}>
            <Input type="text" placeholder="Enter username" />
            <Input type="email" placeholder="Enter e-mail" />
            <Input type="password" placeholder="Enter password" />
            <Input type="password" placeholder="Confirm password" />
            <InputButton type="submit" value="Sign up" />
        </form>
        </Div>
    )
}

export default SignUp