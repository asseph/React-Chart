import { useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { getPurchases} from '../../store/actions/purchaseActions';

// data example
// import { getAllPurchases } from '../../utils/dataPurchase';

// const dataPurchases = getAllPurchases();

// const initialList = [
//   // {
//   //   id: '1',
//   //   name: 'Product 2',
//   //   ProductId: 3,
//   //   amount: 44,
//   //   price: 133,
//   //   subTotal: 43553,
//   // },
//   // {
//   //   id: '2',
//   //   name: 'Product 4',
//   //   ProductId: 5,
//   //   amount: 3,
//   //   price: 33444,
//   //   subTotal: 103422,
//   // },
// ];

const Purchases = () => {
  dayjs.extend(localizedFormat);

  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'All Purchase', link: '#d' },
  ];

  const dispatch = useDispatch();
  const purchaseData = useSelector(state => state.purchase);

  useEffect(() => {
    dispatch(getPurchases());
  }, []);

  // console.log(purchaseData);

  // const [listProducts, setListProducts] = useState(initialList);
  // const [total, setTotal] = useState(0.0);

  // useEffect(() => {
  //   let sum = 0;

  //   for (let i = 0; i < listProducts.length; i++) {
  //     sum += listProducts[i].subTotal;
  //   }
  //   setTotal(sum);
  //   console.log(listProducts);
  // }, [listProducts]);

  // const handleAddProduct = () => {
  //   setListProducts([
  //     ...listProducts,
  //     {
  //       id: Math.random(),
  //       name: '',
  //       ProductId: 0,
  //       amount: 1,
  //       price: 0,
  //       subTotal: 0,
  //     },
  //   ]);
  // };

  return (
    <div className="page-content">
    <Container fluid>
    <Breadcrumbs title="All Purchase" breadcrumbItems={breadcrumbItems} />
      <div>
        <div className="d-flex justify-content-between align-items-start">
          <h1>Purchases</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo quasi pariatur alias
          iusto laudantium vel suscipit quibusdam sint nulla? Quae eos nulla enim vitae, qui
          veritatis nam corrupti architecto?
        </p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Supplier</th>
            <th>Invoice</th>
            <th>Total</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {purchaseData.items.map((item, index) => (
            <tr key={item.id}>
              <td>{index}</td>
              <td>supplier</td>
              {/* <td>
                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
                  item.price,
                )}
              </td> */}
              <td>{item.invoice}</td>
              <td>$ {item.amount}</td>
              <td>{dayjs(item.pay_date).format('LLL')}</td>
              <td>
                <Link className="btn btn-primary btn-sm" to={`/purchases/${item.id}`}>
                  View
                </Link>{' '}
                <a className="btn btn-danger btn-sm" href="#2">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default Purchases;
