import { Row, Col, Container } from 'reactstrap';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © No-Country.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Created with <i className="ri-heart-fill text-danger"></i> by Team G-59
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
