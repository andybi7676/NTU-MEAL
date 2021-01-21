import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Message, Grid, Header, Icon } from 'semantic-ui-react';
import { useRegister } from '../../hooks';

const timeout = 1000;
const Register = () => {
  const [connection, registerAPI] = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if(connection.success && !redirect) {
      setTimeout(() => {
        setRedirect(true);
      }, timeout)
    }
  }, [connection])

  if(redirect) return <Redirect to='/login' />

  return (
    <Grid textAlign="center" style={{ width: "100%", marginTop: "2vh"}}>
      <Grid.Column style={{ width: "80%", maxWidth: "30em" }}>
        <Header as='h2' icon textAlign='center' color='red'>
          <Icon name='user circle' />
          <Header.Content>Register</Header.Content>
        </Header>
        <Form
          onSubmit={e => {
            e.preventDefault();
            registerAPI(name, email, password);
          }}
        >
          <Form.Field>
            <Form.Input icon='user' iconPosition='left' placeholder="Name" type="text" required={true} id="userName" onChange={e => { setName(e.target.value); }} />
          </Form.Field>
          <Form.Field>
            <Form.Input icon='mail' iconPosition='left' placeholder="Email" type="email" required={true} id="userEmail" onChange={e => { setEmail(e.target.value); }} />
          </Form.Field>
          <Form.Field>
            <Form.Input icon='lock' iconPosition='left' placeholder="Password" type="password" required={true} id="userPassword" onChange={e => { setPassword(e.target.value); }} />
          </Form.Field>
          <Button color="green" type="submit">
            Register
          </Button>
          {connection.error
            ?
            <Message negative>{connection.errMsg}</Message>
            :
            null
          }
          {connection.success
            ?
            <Message positive>Register Success!</Message>
            :
            null
          }
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Register;