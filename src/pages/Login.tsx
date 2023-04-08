import React, { useState } from 'react';
import { Button, Form, Container} from 'react-bootstrap';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: handle registration logic
  };  

  return (
  <Container className='d-flex justify-content-center align-items-center'>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your assword"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mx-5 mt-3 px-4 py-2 bg-dark text-white">
        Sign in
      </Button>
    </Form>
  </Container>
  );
}

export default function Login() {
  return (
    <div>
      <hr />
      <h1 className='d-flex justify-content-center align-items-center'>Log in</h1>
      <LoginForm />
    </div>
  )
  }
