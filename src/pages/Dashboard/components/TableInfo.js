import { useState } from 'react';
import { Card, CardBody, Table, Tooltip } from 'reactstrap';

import { dataTable } from '../../../services/dataTable';

const TableInfo = ({ data, title, description }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  // const dataTable = data

  return (
    <Card>
      <CardBody>
        <h4 className="card-title d-flex align-items-center">
          {title}
          <span id={title} className="ms-2">
            <i className="ri-information-line"></i>
          </span>
        </h4>
        <p className="card-title-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Table striped bordered hover size="sm">
          <thead>
            <tr className="table-light">
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Sales</th>
            </tr>
          </thead>

          {dataTable &&
            dataTable.map(item => (
              <tbody className="table-light" key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.product}</td>
                  <td>${item.price} </td>
                  <td>{item.stock}</td>
                  <td>{item.sales}</td>
                </tr>
              </tbody>
            ))}
        </Table>

        <Tooltip
          isOpen={tooltipOpen}
          autohide={false}
          target={title}
          toggle={() => {
            setTooltipOpen(!tooltipOpen);
          }}
        >
          {description}
        </Tooltip>
      </CardBody>
    </Card>
  );
};

export default TableInfo;
