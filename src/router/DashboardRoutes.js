import { Route, Routes } from 'react-router';
import Layout from '../components/layout/Layout';
import {
  Customers,
  Dashboard,
  NewUser,
  NotFound,
  Products,
  Sales,
  Purchases,
  Branches,
  Transactions,
  PurchaseDetails,
} from '../pages';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="new-user" element={<NewUser />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="branches" element={<Branches />} />
        <Route path="sales" element={<Sales />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="purchases/:id" element={<PurchaseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
