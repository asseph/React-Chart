import { useState } from 'react';
import { Container } from 'reactstrap';

import { Button, Row, Col, Form } from 'react-bootstrap';
import Breadcrumbs from '../../components/common/Breadcrumbs';


const listProductsInit = [
  {
    id: Math.random(),
    name: 'Nombre de Producto',
    price: 3243.2,
  },
];

const AddSale = () => {

  const [listItems, setListItems] = useState(listProductsInit);

  

  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Add Sale', link: '#d' },
  ];

  const handleAddItem = () => {
    setListItems([
      ...listItems,
      {
        id: Math.random(),
        name: 'Nombre de Producto 2',
        price: 3232.32,
      },
    ]);
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Add Sale" breadcrumbItems={breadcrumbItems} />
        {/** Contenido Row -> Col -> etc */}
          <h2>Add Sales</h2>
          <hr className="mt-4" />

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Invoice Number</Form.Label>
                <Form.Control type="number" placeholder="Ingrese numero de factura" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Branch</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Buenos Aires</option>
                  <option>Cordoba</option>
                  <option>Caba</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Purchase Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Payment Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Row>

            <hr />

            {listItems && listItems.map(item => <AddProduct key={item.id} data={item} />)}

            <Button variant="primary" className="mb-3" onClick={handleAddItem}>
              Add
            </Button>

            <hr/>

            <Button variant="secondary" className="mb-3">
              Submit
            </Button>
          </Form>
      </Container>
    </div>
  );
}

export default AddSale;

const AddProduct = data => {
  const [form, setForm] = useState({ productId: 0, amount: 1, price: 0, subTotal: 0 });
  const [total, setTotal] = useState('0');

  // useEffect(() => {
  //   // const subTotal = Number(cant * data.price);
  //   // setTotal(subTotal);
  //   const getPrice = getProductById(form.productId);
  //   setForm({ ...form, price: getPrice?.price });
  // }, []);

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // console.log('total', cant * parseInt(data.price));

  return (
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Product</Form.Label>
        <Form.Select value={data.productId} name="productId" onChange={handleForm}>
          <option>Choose...</option>
          {/* {listProducts &&
            listProducts.map(item => (
              <option key={item.id} value={item.id}>
                {item.title} - {item.price}
              </option>
            ))} */}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="10"
          name="amount"
          value={form.cant}
          onChange={handleForm}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" type="text" value={form.price} disabled />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>SubTotal</Form.Label>
        <Form.Control name="subTotal" type="text" value={total} disabled />
      </Form.Group>
    </Row>
  );
};
