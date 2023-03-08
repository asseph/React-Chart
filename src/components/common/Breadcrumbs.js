import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Row, Col, Breadcrumb } from 'react-bootstrap';

import { withTranslation } from 'react-i18next';

const Breadcrumbs = props => {
  const { t, breadcrumbItems, title } = props;
  const itemsLength = breadcrumbItems?.length;

  return (
    <Row>
      <Col xs={12}>
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <h4 className="mb-0">{t(title)}</h4>
          <div className="page-title-right">
            <Breadcrumb listClassName="m-0">
              {breadcrumbItems.map((item, key) =>
                key + 1 === itemsLength ? (
                  <BreadcrumbItem key={key} active>
                    {t(item.title)}
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem key={key}>
                    <Link to={item.link}>{t(item.title)}</Link>
                  </BreadcrumbItem>
                ),
              )}
            </Breadcrumb>
          </div>
        </div>
      </Col>
    </Row>
  );

  // return (
  //   <Row>
  //     <Col xs={12}>
  //       <div className="page-title-box d-flex align-items-center justify-content-between">
  //         <h4 className="mb-0">{t(title)}</h4>
  //         <div className="page-title-right">
  //           <Breadcrumb className="m-0">
  //             {breadcrumbItems.map((item, key) =>
  //               key + 1 === itemsLength ? (
  //                 <Breadcrumb.Item key={key} active>
  //                   {t(item.title)}
  //                 </Breadcrumb.Item>
  //               ) : (
  //                 <Breadcrumb.Item key={key}>
  //                   {t(item.title)}</Link>
  //                 </Breadcrumb.Item>
  //               ),
  //             )}
  //           </Breadcrumb>
  //         </div>
  //       </div>
  //     </Col>
  //   </Row>
  // );
};

export default withTranslation()(Breadcrumbs);
