import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import errorImg from '../assets/images/error-img.png';

const NotFound = () => {
  return (
    <div className="my-5 pt-5">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center my-5">
              <h1 className="font-weight-bold text-error">
                4{' '}
                <span className="error-text">
                  0<img src={errorImg} alt="" className="error-img" />
                </span>{' '}
                4
              </h1>
              <h3 className="text-uppercase">Sorry, page not found</h3>
              <div className="mt-5 text-center">
                <Link to="/" className="btn btn-primary waves-effect waves-light">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
