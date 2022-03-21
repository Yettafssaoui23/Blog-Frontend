import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Signup.css'; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // e means an event 
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <Container className="signup-cont">
      <Row>
      <Col md={5} className="signup__bg--container"></Col>
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <Form className="signup__form" onSubmit={handleLogin}>
            <h1>Create Your Account</h1>
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
            <Button variant="success" type="submit">
              Login to your Account
            </Button>
            <div className="py-4">
                <p>Already, have an account ?  You can Login in <Link to="/login">Here</Link> </p>            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
