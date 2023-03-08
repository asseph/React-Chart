import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import Breadcrumbs from '../../components/common/Breadcrumbs';

const ChangePass = () => {
  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Account', link: '/account' },
    { title: 'Change Password', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Change Password" breadcrumbItems={breadcrumbItems} />
        <Row>
          <Col>
            <Card>
              <CardBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius laudantium ab illo
                veniam eum perferendis iste id, inventore nisi dolorem sunt praesentium quae neque
                aut ut voluptas iusto vero libero?
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePass;
