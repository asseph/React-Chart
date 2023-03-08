import {
  Dashboard,
  Analytics,
  Account,
  ChangePass,
  Branches,
  AddBranches,
  Products,
  AddProduct,
  Category,
  Purchases,
  AddPurchases,
  PurchaseDetails,
  Sales,
  AddSale,
  SaleDetails,
  Suppliers,
  AddSupplier,
  Users,
  AddUser,
  Help,
  Login,
  EditUser,
} from '../pages';

/**
 * Info sobre Permisos/Autorizacion
 * permission: Array
 *
 * Los Roles que coloquemos en el Array no le permitiran el ingreso a esa seccion
 *
 * ej
 * .. permission=['USER_ROLE', 'CEO_ROLE']
 * eso quiere decir que esa ruta no puede ingresar los que tienen USER_ROLE o CEO_ROLE
 *
 * ADMIN_ROLE no se deberia poner en ninguna ruta, porque a ese rol no se le restringira ninguna pagina/pantalla/componente
 *
 * Roles disponibles
 * ['USER_ROLE', 'MANAGER_ROLE', 'CEO_ROLE', 'ADMIN_ROLE']
 *
 */
const privateRoutesList = [
  { path: '/', element: <Dashboard /> },
  { path: '/analytics', element: <Analytics />, permission: ['USER_ROLE'] },

  // products
  { path: '/products', element: <Products /> },
  {
    path: '/products/add',
    element: <AddProduct />,
    permission: ['CEO_ROLE', 'MANAGER_ROLE', 'USER_ROLE'],
  },
  {
    path: '/products/categories',
    element: <Category />,
    permission: ['CEO_ROLE', 'MANAGER_ROLE', 'USER_ROLE'],
  },
  // { path: '/products/:id', element: <EditProduct /> },

  // users
  { path: '/users', element: <Users />, permission: ['CEO_ROLE'] },
  {
    path: '/users/add',
    element: <AddUser />,
    permission: ['CEO_ROLE', 'MANAGER_ROLE', 'USER_ROLE'],
  },
  { path: '/users/:id', element: <EditUser /> },

  // sales
  { path: '/sales', element: <Sales /> },
  { path: '/sales/add', element: <AddSale />, permission: ['CEO_ROLE'] }, //, permission: ['CEO_ROLE']

  // purchases
  { path: '/purchases', element: <Purchases /> },
  { path: '/purchases/add', element: <AddPurchases />, permission: ['CEO_ROLE'] }, //, permission: ['CEO_ROLE']
  { path: '/purchases/:id', element: <PurchaseDetails /> },

  // r. branches
  { path: '/branches', element: <Branches />, permission: ['USER_ROLE'] },
  {
    path: '/branches/add',
    element: <AddBranches />,
    permission: ['CEO_ROLE', 'MANAGER_ROLE', 'USER_ROLE'],
  },

  // r. suppliers
  { path: '/suppliers', element: <Suppliers />, permission: ['CEO_ROLE'] },
  { path: '/sales/:id', element: <SaleDetails /> },
  {
    path: '/suppliers/add',
    element: <AddSupplier />,
    permission: ['CEO_ROLE', 'MANAGER_ROLE', 'USER_ROLE'],
  },

  // r. options
  { path: '/account', element: <Account /> },
  { path: '/account/change-pass', element: <ChangePass /> },
  { path: '/help', element: <Help /> },
];

const publicRoutesList = [{ path: '/login', element: <Login /> }];

export { privateRoutesList, publicRoutesList };
