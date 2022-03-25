import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Hide = styled.p`
    color:#a01233;
`
const Form = styled.form`
    @media (max-width: 542px) {
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
    &:hover {
      cursor: pointer;
    }
  };
  &:first-child, 
  &:nth-child(2), 
  &::placeholder {
    color:#a01233;
    font-weight: bold;
  };
  @media (max-width: 542px) {
    &:first-child, 
    &:nth-child(2),
    &:last-child {
      border-radius: 10px;
      margin-bottom: 5px;
    }
  }
`
const styledLinks = {
  color: "#fff",
}

const LoginForm = ({users, setUser}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const [string, setString] = useState('');
    
    return (
      <div>
        <Hide className={active ? "": "hide"}>{string}</Hide>
        <Form
          onSubmit={ e => {
            e.preventDefault();
            if (username === '' || password === '') {
              setString('All fields must be field');
              setActive(true);
              setTimeout(()=>{
                setActive(false);
              }, 3000)
            } else {
              if (users.some(user => user.username === username && user.password === password)) {
                setUser(true);
              } else {
                setActive(true);
                setString('This user does not exist. Tray to signup first');
                setTimeout(() => {
                    setActive(false)
                }, 2500);
              }
            }
          }}
        >
          <Input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value.trim())}/>
          <Input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value.trim())}/>
          <Input type="submit" value="Log in" />
        </Form>
        <P>Login in, or <Link to="/" style={styledLinks}>sing up</Link> to start exploring</P>
      </div>
    );
}

export default LoginForm;