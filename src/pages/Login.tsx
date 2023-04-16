import { Menu, Form } from "semantic-ui-react";
import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Button, Container} from 'react-bootstrap';
import firebase from '../utilities/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function LoginForm() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = React.useState('register');
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onSubmit() {
    if (activeItem === 'register') {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigate('/');
        })
    } else if (activeItem === 'signin') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigate('/');
        })
    }
  }  

  return (
    <Container>
      <Menu style={{ marginTop: 25 }}>
        <Menu.Item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button active={activeItem ==="register"} onClick={() => setActiveItem('register')} style={{ marginRight: 3 }} >註冊</Button>
          <Button active={activeItem ==="signin"} onClick={() => setActiveItem('signin')} style={{ marginLeft: 3 }} >登入</Button>
        </Menu.Item>
      </Menu>
      <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 25 }} onSubmit={onSubmit}>
        <Form.Field style={{ width: '100%', marginBottom: 3 }}>
          <label>Email</label>
          <Form.Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" type="email"/>
        </Form.Field>
        <Form.Field style={{ width: '100%', marginBottom: 3 }}>
          <label>Password</label>
          <Form.Input value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Enter Your Password" type="password"/>
        </Form.Field>
        <Form.Button style={{ marginTop: 3 }}>
          {activeItem === 'register' && '註冊'}
          {activeItem === 'signin' && '登入'}
        </Form.Button>
      </Form>
    </Container>
  );  
}

export default function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}


