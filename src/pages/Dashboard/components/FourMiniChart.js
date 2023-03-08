import { Col, Row } from 'reactstrap';
import CardWidget from './CardWidget';

const FourMiniChart = props => {
  // const {information} = props
  const information = [
    {
      title: 'Sales of Month',
      numberTitle: 241,
      porcentText: 234,
      iconImg: 'bi bi-person-plus-fill',
    },
    {
      title: 'Earnings of Month',
      numberTitle: 145,
      porcentText: 33,
      iconImg: 'bi bi-coin',
    },
    {
      title: 'All Products',
      numberTitle: 565,
      porcentText: 61,
      iconImg: 'bi bi-apple',
    },
    {
      title: 'Sales Today',
      numberTitle: 61,
      porcentText: 54,
      iconImg: 'bi bi-person-plus-fill',
    },
  ];

  return (
    <Row>
      {information &&
        information.map((item, idx) => (
          <Col lg={3} md={6} key={idx}>
            <CardWidget
              title={item.title}
              numberTitle={item.numberTitle}
              porcentText={item.porcentText}
              iconImg={item.iconImg}
            />
          </Col>
        ))}
    </Row>
  );
};

export default FourMiniChart;
