import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // e means an event 
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <Container className="login-cont">
      <Row>
      <Col md={5} className="login__bg--container"></Col>
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <Form className="login__form" onSubmit={handleLogin}>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="dark" type="submit">
              Login to your Account
            </Button>
            <div className="py-4">
                <p>Don't have an account ? <Link to="/signup">Signup</Link> </p>            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
