import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const AddUser = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Users', link: '/users' },
    { title: 'Add New User', link: '#d' },
  ];
  return (
    <div className="page-content">
      <Container>
        <Breadcrumbs title="Add New User" breadcrumbItems={breadcrumbItems} />
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <h4 className="card-title">Create New User</h4>
                <p className="card-title-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae nihil
                  temporibus nesciunt? Dignissimos, error adipisci! Tempore tempora earum temporibus
                  ipsam pariatur culpa ea atque debitis magni molestiae, aperiam quidem.
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
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select one role</option>
                      <option value="1">User</option>
                      <option value="2">Manager</option>
                      <option value="2">Ceo</option>
                      <option value="3">Admin</option>
                    </select>
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="formStatus" />
                <label className="form-check-label" for="formStatus">
                  Allow the use of functions on the platform
                </label>
              </div>
            </Form.Group> */}
                  <Form.Group className="mb-3" controlId="formBasicEmailsss">
                    <Form.Label>Branch</Form.Label>
                    <select className="form-select" aria-label="Default select example">
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddUser;
