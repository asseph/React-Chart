import { Container, Row, Col } from 'reactstrap';
import LineChart from '../../components/charts/LineChart';

import Breadcrumbs from '../../components/common/Breadcrumbs';
import FourMiniChart from './components/FourMiniChart';
import TableInfo from './components/TableInfo';
import Graph from './Graph';

function Dashboard() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '# of sales',
        data: [12, 19, 3, 5, 12, 3, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Dashboard', link: '#d' },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbItems} />

        <FourMiniChart />

        <Row>
          <Col lg={8} md={6}>
            {/* <Graph
              data={data}
              type="line"
              title="Sales / Earnings in Branch: Cordoba"
              description="Example 1"
            /> */}
            <LineChart />
          </Col>
          <Col lg={4} md={6}>
            <Graph
              data={data}
              type="doughnut"
              title="Earnings of Month"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={6}>
            {/* <Graph title="Graph por Default Line Grap" /> */}
          </Col>
          <Col lg={4} md={6}>
            <Graph data={data} type="bar" title="Titulo  Bar GRaph" description="Ejemplo 1" />{' '}
          </Col>
          <Col lg={4} md={12}>
            <Graph
              data={data}
              type="radar"
              title="New Projects GRaph Radar"
              description="Ejemplo 1"
            />
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={12}>
            {/* <Card>
              <CardBody>
                <h4 className="card-title mb-4">Bar Chart</h4>
                <Row className="text-center">
                  <Col xs={4}>
                    <h5 className="mb-0">2541</h5>
                    <p className="text-muted text-truncate">Activated</p>
                  </Col>
                  <Col xs={4}>
                    <h5 className="mb-0">84845</h5>
                    <p className="text-muted text-truncate">Pending</p>
                  </Col>
                  <Col xs={4}>
                    <h5 className="mb-0">12001</h5>
                    <p className="text-muted text-truncate">Deactivated</p>
                  </Col>
                </Row> */}
            <Graph data={data} type="pie" title="Titulo 3" description="Ejemplo 1" />
            {/* </CardBody>
            </Card> */}
          </Col>
          <Col lg={8} md={12}>
            <TableInfo type="table" title="Titulo" description="Ejemplo 1" />
          </Col>
        </Row>

        <Row>
          <Col>
            <TableInfo type="table" title="Titulo" description="Ejemplo 1" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
