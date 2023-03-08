import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

import Breadcrumbs from '../../components/common/Breadcrumbs';
import LatestTransactions from './LatestTransactions';

// of this page
import MiniWidgets from './MiniWidgets';
import Sources from './Sources';

const Analytics = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: 'Fintech', link: '/' },
    { title: 'Dashboard', link: '#d' },
  ]);
  const [reports, setReports] = useState([
    {
      icon: 'ri-stack-line',
      title: 'Number of Sales',
      value: '1452',
      rate: '2.4%',
      desc: 'From previous period',
    },
    {
      icon: 'ri-store-2-line',
      title: 'Sales Revenue',
      value: '$ 38452',
      rate: '2.4%',
      desc: 'From previous period',
    },
    {
      icon: 'ri-briefcase-4-line',
      title: 'Average Price',
      value: '$ 15.4',
      rate: '2.4%',
      desc: 'From previous period',
    },
  ]);

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbItems} />

        <Row>
          <Col xl={8}>
            <Row>
              <MiniWidgets reports={reports} />
            </Row>
            revenue Analytics
            {/* <RevenueAnalytics /> */}
          </Col>

          <Col xl={4}>
            sales Analytics
            {/* <SalesAnalytics /> */}
            earning reports
            {/* <EarningReports /> */}
          </Col>
        </Row>

        <Row>
          <Sources />
          <LatestTransactions />
        </Row>
      </Container>
    </div>
  );
};

export default Analytics;
