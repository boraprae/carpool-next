import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <Container className="py-2">
      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
