import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import './RegistrationView.css';

const RegistrationView = props => {
  const [username, createUsername] = useState('');
  const [password, createPassword] = useState('');
  const [email, createEmail] = useState('');
  const [birthday, createBirthday] = useState('');

  return (
    <div className='registration-view'>
      <Row>
        <Col>
          <Container className='registration-container'>
            <h3>The 80s Movies App - Register</h3>
            <br></br>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicUsername'>
                <Form.Label>Enter username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Username'
                  value={username}
                  onChange={e => createUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Enter password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={e => createPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Enter email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={e => createEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicBirthday'>
                <Form.Label>Enter Birthday</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='eg. 1981-07-13'
                  value={birthday}
                  onChange={e => createBirthday(e.target.value)}
                />
              </Form.Group>

              <Button
                className='button-register'
                variant='primary'
                type='submit'
                // onClick={handleRegister}>
              >
                Register
              </Button>

              <Button onClick={props.onClick} variant='link' type='submit'>
                Already a member?
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default RegistrationView;
