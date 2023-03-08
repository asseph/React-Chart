import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

export default function AddBranches() {
  return (
    <div className='m-5 wrapperBranches'>
      <h2>Add Branches</h2>
      <hr className="mt-4" />

      <Form>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Branches</Form.Label>
            <Form.Control type="input" placeholder="Ingrese la sucursal" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Manager</Form.Label>
            <Form.Control type="input" placeholder="Ingrese el nombre" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Product</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Fruit</option>
              <option>Vegetable</option>
              <option>Meat</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Branches Sales</Form.Label>
            <Form.Control type="input" placeholder="Ingrese el monto" />
          </Form.Group>
        </Row>

        <Button variant="primary" className="mb-3">
          Add
        </Button>
      </Form>
    </div>
  );
}
