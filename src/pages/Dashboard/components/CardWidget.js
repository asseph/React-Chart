import { Card, CardBody } from 'reactstrap';

function CardWidget({ numberTitle, title, porcentText, iconImg }) {
  return (
    <Card>
      <CardBody>
        <div className="d-flex d-lg-flex d-md-block align-items-center justify-content-between">
          <div>
            <div className="d-inline-flex align-items-center justify-content-between">
              <h2 className="text-dark mb-1 font-weight-medium">{numberTitle}</h2>

              <span className="badge badge-soft-success font-12 font-weight-medium badge-pill ms-2 d-lg-block d-md-none">
                <i className="ri-arrow-up-s-line"> </i> {porcentText} %
              </span>
            </div>
            <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">{title}</h6>
          </div>
          <div className="ml-auto mt-md-3 mt-lg-0">
            <span className="opacity-7 text-muted">
              <i className={iconImg}></i>
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardWidget;
