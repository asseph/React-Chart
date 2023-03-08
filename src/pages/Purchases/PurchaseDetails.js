import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosWithOutToken } from '../../services/axios';
import { getProductById } from '../../utils/dataProducts';
import { getPurchaseById } from '../../utils/dataPurchase';

const PurchaseDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  // const data = getPurchaseById(Number(params.id));
  const [purchase, sePurchase] = useState({});
  // para obtener los datos del form
  useEffect(() => {
    axiosWithOutToken('/purchase/' + params.id).then(({ data }) => {
      sePurchase(data);
      console.log(data);
    }).catch((err) => {
      console.log(err)
    });
  }, []);


  let acumulador = 0;
  purchase.products && purchase.products.forEach(item => {
    const multipl = item.cost * item.count;
    acumulador += multipl;
  });

  return (
    <div className="m-5 wrapperBranches">
      <div className="d-flex justify-content-between align-items-start">
        <h1>Purchase Details: {params.id}</h1>
        <Button variant="warning" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
      <hr />
      {/* <h2>CLIENT: {data.name}</h2> */}
      <h2>List of products:</h2>

      <Table striped bordered hover size="sm">
        <thead>
          <tr className="thead-dark">
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        {purchase.products && purchase.products.map((item, index) => {
          return (
            <tbody className="table light" key={item.ProductId}>
              <tr key={index}>
                <td>{item.product_name}</td>
                <td>${item.cost} </td>
                <td>{item.count}</td> 
                <td>$ {Math.round(item.cost * item.count)}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>

      <h2>Total $ {' '}
        {Math.round(acumulador) }
        
      </h2>
    </div>
  );
};

export default PurchaseDetails;
