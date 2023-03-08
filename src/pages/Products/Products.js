import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useSelector, useDispatch } from 'react-redux';

import Breadcrumbs from '../../components/common/Breadcrumbs';
import { BasicTable } from './BasicTable';
import { useEffect } from 'react';
import { getProducts } from '../../store/actions/productsActions';
import convertJsonToExcel from '../Products/excel';

const Products = () => {
  const { items, loading, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Products', link: '#d' },
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleOnChange = () => {
    const data = convertJsonToExcel(items);
    return data
  };

  return (
    <div className='page-content'>
      <Container fluid>
        <Breadcrumbs title='Products' breadcrumbItems={breadcrumbItems} />
        <Row>
          <Col>
            <Card>
              <CardBody>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, quos
                  excepturi. Expedita dolor non, saepe tempora soluta
                </p>
                <div className='d-flex justify-content-end'>
                  {/* <ReactHTMLTableToExcel
                    className='btn btn-primary mb-3 '
                    table='data table'
                    filename='excel'
                    sheet='excel.xlsx'
                    onChange={handleOnChange}
                    buttonText='Export to Excel'
                  /> */}
                  {/* <a href="./excel.xlsx">Export to Excel</a> */}
                  <button onClick={handleOnChange} className='btn btn-primary mb-3'>Export to Excel</button>
                </div>

                {error && (
                  <>
                    <h3>Errors: {JSON.stringify(error, null, ' ')}</h3>
                  </>
                )}

                {loading ? (
                  <>
                    <h3>Cargando...</h3>
                  </>
                ) : (
                  <>
                    <BasicTable data={items} />
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
