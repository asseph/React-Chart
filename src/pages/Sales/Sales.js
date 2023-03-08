import { useState, useEffect } from 'react';
import { Button, Table, Modal, Container } from 'react-bootstrap';
import Bill from '../Bill/Bill';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { getSales } from '../../store/actions/saleActions';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

const Sales = () => {
  dayjs.extend(localizedFormat);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const saleData = useSelector(state => state.sale);

  useEffect(() => {
    dispatch(getSales());
  }, []);

  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'All Sale', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="All Sale" breadcrumbItems={breadcrumbItems} />
        <div>
          <h1>Sales</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo quasi pariatur alias
            iusto laudantium vel suscipit quibusdam sint nulla? Quae eos nulla enim vitae, qui
            veritatis nam corrupti architecto?
          </p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>N` Bill</th>
              <th>Total</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {saleData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>$ {item.amount}</td>
                <td>{dayjs(item.sale_date).format('LLL')}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={handleShow}>
                    View
                  </Button>{' '}
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Sale Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Detail of a sale</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda, doloribus,
              eaque possimus sequi porro, necessitatibus esse dolorem enim aperiam dolore dolorum
              non doloremque! Dolore error officia nostrum autem corrupti?
            </p>

            <Bill />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Sales;
