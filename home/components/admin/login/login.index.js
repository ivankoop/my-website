import { Button, Form, Segment } from 'semantic-ui-react';
import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.loginRoot}>
      <Segment className={styles.segment}>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </div>
  );
}

export default Login;
