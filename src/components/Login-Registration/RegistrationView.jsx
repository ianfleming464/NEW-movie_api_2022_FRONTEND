import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './registration-view.scss';
import { Link } from 'react-router-dom';

export function RegistrationView(props) {
  const [username, createUsername] = useState(''); // Array destructuring - first item is current value, second is a function that lets us update it
  const [password, createPassword] = useState('');
  const [email, createEmail] = useState('');
  const [birthday, createBirthday] = useState('');

  return (
    <Container className='registration-container'>
      <h3 className='text-center'>My 1980s Movies API - Sign up!</h3>
      <br></br>
      <Form>
        <Form.Group controlId='formBasicUsername'>
          <Form.Control
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={e => createUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={e => createPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Control
            type='text'
            placeholder='Email'
            value={email}
            onChange={e => createEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicBirthday'>
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
        <Link to={'/'}>
          <Button variant='link' type='submit'>
            Already a member?
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
