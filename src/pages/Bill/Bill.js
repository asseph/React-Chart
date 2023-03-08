import React from 'react';
import { Table } from 'react-bootstrap';
import logoBlack from '../../assets/images/logoBlack.svg';

// data example
import { getAllPurchases } from '../../utils/dataPurchase';
// import { getAllProductsBack, getProductBackById } from '../../utils/dataProductsBack';

const dataPurchases = getAllPurchases();
// const dataProducts = getAllProductsBack();

function Bill() {
  const getCurrentDay = () => {
    return new Date().toLocaleDateString("en-US");
  };

  //   const generateRandomString = (num) => {
  //     return Math.random().toString(36).substring(0,num);
  // }

  return (
    <div className="row m-3 shadow">
      <div className="row p-3 bg-white">
        <div className="col-12">
          <div className="d-flex justify-content-between ">
            <img src={logoBlack} alt="" className="w-25" />

            <Table bordered size="sm" className="text-center m-7 w-25">
              <tbody>
                <tr>
                  <th>FACTURA</th>
                </tr>
                <tr>
                  <th>{getCurrentDay()}</th>
                </tr>
                <tr>
                  <th>A1B3345</th>
                </tr>
              </tbody>
            </Table>
          </div>

          <Table bordered size="sm" className="text-left bordeless">
            <tbody>
              <tr>
                <th className="w-25">Delivery Address:</th>
                <td>texto</td>
              </tr>
              <tr>
                <th>Billing Address:</th>
                <td>texto</td>
              </tr>
            </tbody>
          </Table>

          <Table bordered size="sm" className="text-center">
            <thead>
              <tr>
                <th>Invoice number</th>
                <th>Date Invoice</th>
                <th>Order Reference</th>
                <th>Order Date</th>
                <th>Order Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A1B3345</td>
                <td>AD3SD2</td>
                <td>GDWRHGB</td>
                <td>{getCurrentDay()}</td>
                <td>4365747</td>
              </tr>
            </tbody>
          </Table>

          <Table bordered size="sm" className="text-center">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {dataPurchases.map(item => (
                <tr key={item.id}>
                  <td>1</td>
                  <td>{item.name}</td>
                  <td>3</td>
                  <td>96</td>
                  <td>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
                    item.price,
                  )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Table bordered size="sm" className="text-center w-50">
            <tbody>
              <tr>
                <th striped>Payment method</th>
                <td>Credit</td>
              </tr>
            </tbody>
          </Table>

          <Table bordered size="sm" className="text-center ms-auto w-50">
            <tbody>
              <tr>
                <th>Products Total</th>
                <td>A1B3345</td>
              </tr>
              <tr>
                <th>Shipping Cost</th>
                <td>GDWRHGB</td>
              </tr>
              <tr>
                <th>Total (IVA excl.)</th>
                <td>AD3SD2</td>
              </tr>
              <tr>
                <th>Total Taxes</th>
                <td>784856</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>4365747</td>
              </tr>
            </tbody>
          </Table>

        </div>
      </div>
    </div>
  )
}

export default Bill;
