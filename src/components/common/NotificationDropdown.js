import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap';
import SimpleBar from 'simplebar-react';

// language i18b
import { withTranslation } from 'react-i18next';

// import images
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';

const NotificationDropdown = ({ t }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggleMenu} tag="li" className="d-inline-block">
        <DropdownToggle
          tag="button"
          className="btn header-item noti-icon waves-effect"
          id="page-header-notifications-dropdown"
        >
          <i className="ri-notification-3-line"></i>
          <span className="noti-dot"></span>
        </DropdownToggle>
        <DropdownMenu end className="dropdown-menu dropdown-menu-lg p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {t('Notifications')} </h6>
              </Col>
              <div className="col-auto">
                <Link to="#" className="small">
                  {' '}
                  {t('View All')}
                </Link>
              </div>
            </Row>
          </div>
          <SimpleBar style={{ maxHeight: '230px' }}>
            <ItemNotification
              icon="ri-shopping-cart-line"
              backgroundIcon="bg-primary"
              author={t('Your order is placed')}
              message={t('If several languages coalesce the grammar')}
              time={t('3 min ago')}
            />

            <ItemNotification
              avatar={avatar3}
              author={t('James Lemire')}
              message={t('It will seem like simplified English.')}
              time={t('1 hours ago')}
            />

            <ItemNotification
              icon="ri-checkbox-circle-line"
              backgroundIcon="bg-success"
              author={t('Your item is shipped')}
              message={t('If several languages coalesce the grammar')}
              time={t('3 min ago')}
            />

            <ItemNotification
              avatar={avatar4}
              author={t('Salena Layfield')}
              message={t('As a skeptical Cambridge friend of mine occidental.')}
              time={t('1 hours ago')}
            />
          </SimpleBar>
          <div className="p-2 border-top">
            <Link to="#" className="btn btn-sm btn-link font-size-14 d-block text-center">
              <i className="ri-arrow-right-circle-line mr-1"></i>
              {t(' View More')}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

function ItemNotification({ path = '#s', icon, backgroundIcon, avatar, author, message, time }) {
  return (
    <Link to={path} className="text-reset notification-item">
      <div className="d-flex media">
        <div className="flex-shrink-0">
          {icon ? (
            <div className="avatar-xs mr-3">
              <span className={`avatar-title ${backgroundIcon} rounded-circle font-size-16`}>
                <i className={icon}></i>
              </span>
            </div>
          ) : (
            <img src={avatar} className="mr-3 rounded-circle avatar-xs" alt={author} />
          )}
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="mt-0 mb-1">{author}</h6>
          <div className="font-size-12 text-muted">
            <p className="mb-1">{message}</p>
            <p className="mb-0">
              <i className="ri-time-line"></i> {time}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default withTranslation()(NotificationDropdown);
