import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

const CommonDropdown = ({ t }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Dropdown isOpen={menu} toggle={toggleMenu} className="d-none d-lg-inline-block ms-1">
      <DropdownToggle tag="button" className="btn header-item noti-icon waves-effect">
        <i className="ri-apps-2-line"></i>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-lg" end>
        <div className="px-lg-2">
          <Row className="g-0">
            <Col>
              <Link className="dropdown-icon-item" to="/products/add">
                <span className="ri-shopping-bag-3-line fs-3"></span>
                <span>{t('Add Product')}</span>
              </Link>
            </Col>
            <Col>
              <Link className="dropdown-icon-item" to="/sales/add">
                <span className="ri-currency-line fs-3"></span>
                <span>{t('Add Sale')}</span>
              </Link>
            </Col>
            <Col>
              <Link className="dropdown-icon-item" to="/purchases/add">
                <span className="ri-refund-2-line fs-3"></span>
                <span>{t('Add Purchase')}</span>
              </Link>
            </Col>
          </Row>

          <Row className="g-0">
            <Col>
              <Link className="dropdown-icon-item" to="/analytics">
                <span className="ri-line-chart-line fs-3"></span>
                <span>{t('Get Balance')}</span>
              </Link>
            </Col>
            <Col>
              <Link className="dropdown-icon-item" to="/branches/add">
                <span className="ri-store-3-line fs-3"></span>
                <span>{t('Add Branch')}</span>
              </Link>
            </Col>
            <Col>
              <Link className="dropdown-icon-item" to="/suppliers/add">
                <span className="ri-database-line fs-3"></span>
                <span>{t('Add Supplier')}</span>
              </Link>
            </Col>
          </Row>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default withTranslation()(CommonDropdown);
