import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const newUser = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Create New User</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas distinctio nostrum
            quo nobis ipsa obcaecati, repudiandae alias earum iure consequatur sequi rerum optio
            ratione natus fugit tempore qui totam delectus!
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmailaaa">
              <Form.Label>Role</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select one role</option>
                <option value="1">User</option>
                <option value="2">Manager</option>
                <option value="2">Ceo</option>
                <option value="3">Admin</option>
              </select>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="formStatus" />
                <label class="form-check-label" for="formStatus">
                  Allow the use of functions on the platform
                </label>
              </div>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmailsss">
              <Form.Label>Branch</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Buenos Aires</option>
                <option value="2">Rosario</option>
                <option value="3">Mendoza</option>
                <option value="4">Salta</option>
                <option value="5">Cordoba</option>
                <option value="6">Santa Cruz</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Send a welcome email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default newUser;
