import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

// import menuDropdown
import LanguageDropdown from '../common/LanguageDropdown';
import ProfileMenu from '../common/ProfileMenu';
// import CommonDropdown from '../common/CommonDropdown';
// import NotificationDropdown from '../common/NotificationDropdown';

// actions
import { adminLogout } from '../../store/actions/authActions';

// import helpers
import { toggleFullscreen } from '../../utils/helpers';

// import logo
import logosmlight from '../../assets/images/logo-sm-light.svg';
import logolight from '../../assets/images/logo-light.svg';

const Header = ({ toggleMenuCallback }) => {
  // const { layoutType } = useSelector(state => state.layout);
  const { name } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(adminLogout());
  };

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={logosmlight} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={logolight} alt="" height="22" />
              </span>
            </Link>
          </div>

          <Button
            size="sm"
            color="none"
            type="button"
            onClick={toggleMenuCallback}
            className="px-3 font-size-24 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i className="ri-menu-2-line align-middle"></i>
          </Button>
        </div>

        <div className="d-flex">
          <LanguageDropdown />

          {/* <CommonDropdown /> */}

          <div className="dropdown d-none d-lg-inline-block ms-1">
            <Button
              color="none"
              type="button"
              className="header-item noti-icon waves-effect"
              onClick={toggleFullscreen}
            >
              <i className="ri-fullscreen-line"></i>
            </Button>
          </div>

          {/* <NotificationDropdown /> */}

          <ProfileMenu name={name} handleLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
};

export default Header;
