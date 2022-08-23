import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import './LoginView.css';

// PLACEHOLDER LOGIN FORM

const LoginView = () => {
  return (
    <div className='login-view'>
      <Row>
        <Col>
          <Container className='login-container'>
            <h3 className='text-center'>The 80s Movies App - Login</h3>
            <Form>
              <Form.Group controlId='formBasicUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' />
              </Form.Group>
              <div className='button-row'>
                <Button className='mt-auto' variant='outline-secondary' type='submit'>
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
