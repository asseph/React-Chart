import { useState } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import AvatarLetter from '../common/AvatarLetter';

const ProfileMenu = ({ t, name, handleLogout }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  let nameUser = name;
  if (localStorage.getItem('authUser')) {
    const obj = JSON.parse(localStorage.getItem('authUser'));
    const uNm = obj.email.split('@')[0];
    nameUser = uNm.charAt(0).toUpperCase() + uNm.slice(1);
    // name = uNm.slice(0,2).toUpperCase()
  }

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggleMenu} className="d-inline-block user-dropdown">
        <DropdownToggle
          tag="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          <AvatarLetter name={nameUser} />
          <span className="d-none d-xl-inline-block ms-2 text-transform">{nameUser}</span>
          <i className="ri-arrow-down-s-line d-none ms-1 d-xl-inline-block"></i>
        </DropdownToggle>
        <DropdownMenu end>
          <Link to="/account">
            <DropdownItem>
              <i className="ri-user-line align-middle mr-1"></i> {t('Account')}
            </DropdownItem>
          </Link>
          {/* <Link to="/account/change-pass">
            <DropdownItem>
              <i className="ri-lock-unlock-line align-middle mr-1"></i> {t('Change Password')}
            </DropdownItem>
          </Link> */}
          <DropdownItem divider />
          <DropdownItem className="text-danger" onClick={handleLogout}>
            <i className="ri-shut-down-line align-middle mr-1 text-danger"></i> {t('Logout')}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default withTranslation()(ProfileMenu);
