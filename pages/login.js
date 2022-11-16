import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    //name tag of bootstrap
    const name = event.target.name;
    //value of name target
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs.username);
    console.log(inputs.password);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    };
    try {
      const res = await fetch("/api/authen/login", options);
      if(res.ok){
        alert("ok");
      } else {
        throw Error(res.statusText);
      }
    } catch (error) {
        alert(error.message);
        console.log(error.message);
    }
  };

  return (
    <Container>
      <Form className="py-2" onSubmit={handleSubmit}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={handleChange}
          name="username"
          value={inputs.username || ""}
        />
        <Form.Label>Password</Form.Label>
        {/* Two way blinding */}
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={inputs.password || ""}
        />
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
