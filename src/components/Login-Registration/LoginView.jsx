import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import './LoginView.css';

const LoginView = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication then call props.onLoggedIn(username)
    props.onLoggedIn(username, password);
    console.log(props.onLoggedIn);
  };

  return (
    <div className='login-view'>
      <Row>
        <Col>
          <Container className='login-container'>
            <h3 className='text-center'>The 80s Movies App - Login </h3>
            <Form>
              <Form.Group controlId='formBasicUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className='button-row'>
                <Button
                  className='mt-auto'
                  variant='outline-secondary'
                  type='submit'
                  onClick={handleSubmit}>
                  Login
                </Button>
                <Button variant='link' type='submit'>
                  Sign up!
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default LoginView;
