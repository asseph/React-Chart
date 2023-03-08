import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//i18n
import i18n from '../../i18n';
import { withTranslation } from 'react-i18next';

// flags
import usFlag from '../../assets/images/flags/us.jpg';
import spain from '../../assets/images/flags/spain.jpg';
import germany from '../../assets/images/flags/germany.jpg';
import italy from '../../assets/images/flags/italy.jpg';
import russia from '../../assets/images/flags/russia.jpg';

const LanguageDropdown = ({ t }) => {
  const [menu, setMenu] = useState(false);
  const [state, setState] = useState({
    lng: 'English',
    flag: usFlag,
  });

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const changeLanguageAction = lng => {
    //set the selected language to i18n
    i18n.changeLanguage(lng);

    if (lng === 'sp') setState({ ...state, lng: 'Spanish', flag: spain });
    else if (lng === 'gr') setState({ ...state, lng: 'German', flag: germany });
    else if (lng === 'rs') setState({ ...state, lng: 'Russian', flag: russia });
    else if (lng === 'it') setState({ ...state, lng: 'Italian', flag: italy });
    else if (lng === 'eng') setState({ ...state, lng: 'English', flag: usFlag });
  };

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggleMenu} className="d-none d-sm-inline-block">
        <DropdownToggle tag="button" className="btn header-item waves-effect">
          <img className="" src={state.flag} alt="Header Language" height="16" />
          {'  '}
          <span className="align-middle">{state.lng}</span>
        </DropdownToggle>

        <DropdownMenu end>
          <DropdownItem
            active={state.lng === 'English' ? true : false}
            href=""
            onClick={() => changeLanguageAction('eng')}
            className="notify-item"
          >
            <img src={usFlag} alt="user" className="mr-1" height="12" />{' '}
            <span className="align-middle">English</span>
          </DropdownItem>

          <DropdownItem
            href=""
            active={state.lng === 'Spanish' ? true : false}
            onClick={() => changeLanguageAction('sp')}
            className="notify-item"
          >
            <img src={spain} alt="user" className="mr-1" height="12" />{' '}
            <span className="align-middle">Spanish</span>
          </DropdownItem>

          <DropdownItem
            href=""
            active={state.lng === 'German' ? true : false}
            onClick={() => changeLanguageAction('gr')}
            className=" notify-item"
          >
            <img src={germany} alt="user" className="mr-1" height="12" />{' '}
            <span className="align-middle">German</span>
          </DropdownItem>

          <DropdownItem
            href=""
            active={state.lng === 'Italian' ? true : false}
            onClick={() => changeLanguageAction('it')}
            className=" notify-item"
          >
            <img src={italy} alt="user" className="mr-1" height="12" />{' '}
            <span className="align-middle">Italian</span>
          </DropdownItem>

          <DropdownItem
            href=""
            active={state.lng === 'Russian' ? true : false}
            onClick={() => changeLanguageAction('rs')}
            className=" notify-item"
          >
            <img src={russia} alt="user" className="mr-1" height="12" />{' '}
            <span className="align-middle">Russian</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default withTranslation()(LanguageDropdown);
