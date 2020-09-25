import React, { useState } from 'react'
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

const SignIn = ({users, setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <Div>
        <h1 style={{color: 'darkcyan'}}>Login to your account</h1>
        <h3 style={{color: 'white'}}>If you do not have an account, registering for an account is free. Click <a href="/" style={{ color: 'darkcyan'}}>here</a> to get started.</h3>
        <form style={{padding: '50px'}} 
         onSubmit={(e) => {
            e.prevent.Default()
            if(users.some(user => user.username === username && user.password === password)){
                setUser(username)
                console.log(username)
            } 
            else{console.log('neispravni unos')}
         }}>
            <Input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}   />
            <InputButton type="submit" value="Sign in" />
        </form>
        </Div>
    )
}

export default SignIn