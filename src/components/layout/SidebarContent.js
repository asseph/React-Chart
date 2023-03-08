import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MetisMenu from 'metismenujs';

import { activateParentDropdown } from '../../utils/helpers';

const SidebarContent = props => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user: { role }} = useSelector( state => state.auth);

  const initMenu = () => {
    new MetisMenu('#side-menu');
    let matchingMenuItem = null;
    let ul = document.getElementById('side-menu');
    let items = ul.getElementsByTagName('a');
    for (let i = 0; i < items.length; ++i) {
      if (location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  };

  useEffect(() => {
    initMenu();
  }, []);

  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">{t('Menu')}</li>

          { 
            ( role !== 'USER_ROLE' ) &&
              <li>
                <Link to="/" className="waves-effect">
                  <i className="ri-dashboard-line"></i>
                  <span className="ms-1">{t('Dashboard')}</span>
                </Link>
              </li>
          }
          {/* {
            ( role !== 'USER_ROLE' ) &&
            <li>
              <Link to="/analytics" className="waves-effect">
                <i className="ri-bar-chart-line"></i>
                <span className="ms-1">{t('Analytics')}</span>
              </Link>
            </li>
          } */}
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-exchange-dollar-line"></i>
              <span className="ms-1">{t('Transactions')}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/purchases">{t('All Purchases')}</Link>
              </li>
              <li>
                <Link to="/sales">{t('All Sales')}</Link>
              </li>
              {
                ( role !== 'CEO_ROLE') &&
                  <>
                    <li>
                      <Link to="/purchases/add">{t('Add Purchase')}</Link>
                    </li>
                    <li>
                      <Link to="/sales/add">{t('Add Sale')}</Link>
                    </li>  
                  </>
              }
            </ul>
          </li>

          <li className="menu-title">{t('General')}</li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-store-2-line"></i>
              <span className="ms-1">{t('Products')}</span>
            </Link>

            <ul className="sub-menu">
              <li>
                <Link to="/products">{t('List Products')}</Link>
              </li>
              {
                ( role === 'ADMIN_ROLE') &&
                <li>
                  <Link to="/products/add">{t('Add Product')}</Link>
                </li>
              }
              {
                false 
                &&
                  <li>
                    <Link to="/products/categories">{t('Categories')}</Link>
                  </li>
              }
            </ul>
          </li>

          {
            ( role === 'CEO_ROLE' || role === 'ADMIN_ROLE') &&
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-community-line"></i>
                <span className="ms-1">{t('Branches')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/branches">{t('List Branches')}</Link>
                </li>
                {
                  false &&
                  <li>
                    <Link to="/branches/add">{t('Add Branch')}</Link>
                  </li>
                }
              </ul>
            </li>
          }

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-truck-line"></i>
              <span className="ms-1">{t('Suppliers')}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/suppliers">{t('List Suppliers')}</Link>
              </li>
              {
                ( role === 'ADMIN_ROLE' ) &&
                <li>
                  <Link to="/suppliers/add">{t('Add Supplier')}</Link>
                </li>
              }
            </ul>
          </li>

          {
            ( role === 'ADMIN_ROLE') &&
            <>
              <li className="menu-title">{t('Application')}</li>

              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="ri-account-circle-line"></i>
                  <span className="ms-1">{t('Users')}</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/users">{t('List Users')}</Link>
                  </li>
                  <li>
                    <Link to="/users/add">{t('Add User')}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="ri-settings-2-line"></i>
                  <span className="ms-1">{t('Settings')}</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/account">{t('Account')}</Link>
                  </li>
                  <li>
                    <Link to="/account/change-pass">{t('Change Password')}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/help" className="waves-effect">
                  <i className="ri-question-line"></i>
                  <span className="ms-1">{t('Help')}</span>
                </Link>
              </li>
            </>
          }
        </ul>
      </div>
    </>
  );
};

export default SidebarContent;
