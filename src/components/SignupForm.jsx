import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid';

const Hide = styled.p`
    color:#a01233;
`
const Form = styled.form`
    @media (max-width: 690px) {
        display: flex;
        flex-direction: column;
    }
`
const P = styled.p`
    font-weight: normal;
    color: #fff;
`
const Input = styled.input`
  padding: 10px;
  border: 3px solid #a01233;
  margin-right: 2px;
  &:first-child {
    border-radius: 10px 0 0 10px;
    margin-right: 2px;
  };
  &:last-child {
    border-radius: 0 10px 10px 0;
    color: #fff;
    background-color: #a01233;
  };
  &:first-child, 
  &:nth-child(2), 
  &:nth-child(3), 
  &::placeholder {
    color:#a01233;
    font-weight: bold;
  };
  @media (max-width: 768px) {
    &:first-child, 
    &:nth-child(2),
    &:nth-child(3),
    &:last-child {
      border-radius: 10px;
      margin-bottom: 5px;
    }
  }
`
const styledLinks = {
  color: "#fff",
}

const SignupForm = ({users, setUsers, setUser}) => {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('');
    const [active, setActive] = useState(false);
    const [string, setString] = useState('');
    
    return (
      <>
        <Hide className={active ? "": "hide"}>{string}</Hide>
        <Form
          onSubmit={e => {
            e.preventDefault();
            if(usernameInput !== '' && passwordInput !== '' && emailInput !== '') {
              if (users.every(user => user.username !== `${usernameInput}`)) {
                setUsers([...users, {
                  username: usernameInput,
                  password: passwordInput,
                  email: emailInput,
                  id: uuid(),
                }])
                setUser(true);
              } 
              else {
                setActive(true);
                setString('This username is taken');
                setTimeout(() => {
                    setActive(false)
                }, 2500);
              }
            } else {
              setActive(true);
              setString('All fields must be filled');
              setTimeout(() => {
                  setActive(false)
              }, 2500);
            }
          }}
        >
          <Input type="text" placeholder="Enter Username" onChange={(e) => setUsernameInput(e.target.value.trim())}/>
          <Input type="password" placeholder="Enter Password" onChange={(e) => setPasswordInput(e.target.value.trim())}/>
          <Input type="email" placeholder="Enter Email" onChange={(e) => setEmailInput(e.target.value.trim())}/>
          <Input type="submit" value="Sign up" />
        </Form>
        <P>If you already have an account <Link to="/login"style={styledLinks}>log in</Link> to start exploring</P>
      </>
    );
}

export default SignupForm;