import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Table,
  UncontrolledTooltip,
  Alert,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/userActions';

const Users = () => {
  const { items, loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(items);

  const breadcrumbItems = [
    { title: 'Tables', link: '#' },
    { title: 'Users', link: '#' },
  ];

  const [state, setState] = useState({
    isAlertOpen: false,
    modal_static: false,
    data: [
      {
        customer: 'Carolyn Harvey',
        email: 'CarolynHarvey@rhyta.com',
        phone: '580-464-4694',
        balance: '$ 3245',
        date: '06 Apr, 2020',
      },
      {
        customer: 'Angelyn Hardin',
        email: 'AngelynHardin@dayrep.com',
        phone: '913-248-2690',
        balance: '$ 2435',
        date: '05 Apr, 2020',
      },
      {
        customer: 'Carrie Thompson	',
        email: 'CarrieThompson@rhyta.com',
        phone: '734-819-9286',
        balance: '$ 2653',
        date: '04 Apr, 2020',
      },
      {
        customer: 'Kathleen Haller',
        email: 'KathleenHaller@dayrep.com',
        phone: '313-742-3333',
        balance: '$ 2135',
        date: '03 Apr, 2020',
      },
      {
        customer: 'Martha Beasley',
        email: 'MarthaBeasley@teleworm.us',
        phone: '301-330-5745',
        balance: '$ 2698',
        date: '02 Apr, 2020',
      },
      {
        customer: 'Kathryn Hudson',
        email: 'KathrynHudson@armyspy.com',
        phone: '414-453-5725',
        balance: '$ 2758',
        date: '02 Apr, 2020',
      },
      {
        customer: 'Robert Bott',
        email: 'RobertBott@armyspy.com',
        phone: '712-237-9899',
        balance: '$ 2836',
        date: '01 Apr, 2020',
      },
      {
        customer: 'Mary McDonald',
        email: 'MaryMcDonald@armyspy.com',
        phone: '317-510-25554',
        balance: '$ 3245',
        date: '31 Mar, 2020',
      },
      {
        customer: 'Keith Rainey',
        email: 'KeithRainey@jourrapide.com	',
        phone: '214-712-1810',
        balance: '$ 3125',
        date: '30 Mar, 2020',
      },
      {
        customer: 'Anthony Russo',
        email: 'AnthonyRusso@jourrapide.com',
        phone: '412-371-8864',
        balance: '$ 2456',
        date: '30 Mar, 2020',
      },
      {
        customer: 'Donna Betz',
        email: 'DonnaBetz@jourrapide.com',
        phone: '626-583-5779',
        balance: '$ 3423',
        date: '29 Mar, 2020',
      },
      {
        customer: 'Angie Andres',
        email: 'AngieAndres@armyspy.com',
        phone: '213-494-4527',
        balance: '$ 3245',
        date: '28 Apr, 2020',
      },
    ],
  });

  const addCustomer = (event, values) => {
    //Assign values to the variables
    var name = values.custname;
    var cEmail = values.custemail;
    var phonenumber = values.phonenumber;
    var newBalance = '$ ' + values.wBalance;
    var d = new Date();
    var day = d.getDate();
    var mon = d.getMonth();
    var y = d.getFullYear();
    var date = day + '/' + mon + '/' + y;
    let demoData = state.data;

    //push data to the varible
    demoData.push({
      customer: name,
      email: cEmail,
      phone: phonenumber,
      balance: newBalance,
      date: date,
    });

    //update data state
    setState({ ...state, data: demoData });

    //show alert for success message
    setState({ ...state, isAlertOpen: true });

    //update state for closing
    setTimeout(() => {
      setState({ ...state, modal_static: false });
    }, 2000);
  };

  // if (error) {
  //   return <>Error: {JSON.stringify(error, null, ' ')}</>;
  // }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Users" breadcrumbItems={breadcrumbItems} />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="d-flex justify-content-end">
                    <Link
                      to="#"
                      onClick={() => setState({ ...state, modal_static: true, isAlertOpen: false })}
                      className="btn btn-success mb-2"
                    >
                      <i className="ri-add-line mr-2"></i> Add New User
                    </Link>
                  </div>
                  {loading ? (
                    <>
                      <h2>Cargando..</h2>
                    </>
                  ) : (
                    <div className="table-responsive mt-3">
                      <Table
                        className="table-centered datatable dt-responsive nowrap "
                        style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}
                      >
                        <thead className="thead-light">
                          <tr>
                            <th style={{ width: '20px' }}></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Branch</th>
                            <th style={{ width: '120px' }}>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {items.map((customerData, key) => (
                            <tr key={key}>
                              <td>{key}</td>
                              <td>{customerData.name}</td>
                              <td>{customerData.email}</td>
                              <td>{customerData.role}</td>
                              <td>{customerData.status}</td>
                              <td>{customerData.branch?.branch_name}</td>
                              <td>
                                <Link
                                  to={`/users/` + customerData.id}
                                  className="mr-3 text-primary"
                                  id={'edit' + key}
                                >
                                  <i className="ri-edit-box-fill font-size-18"></i>
                                </Link>
                                <UncontrolledTooltip target={'edit' + key} placement="top">
                                  Edit
                                </UncontrolledTooltip>
                                <Link to="#" className="text-danger" id={'delete' + key}>
                                  <i className="ri-delete-bin-5-fill font-size-18"></i>
                                </Link>
                                <UncontrolledTooltip target={'delete' + key} placement="top">
                                  Delete
                                </UncontrolledTooltip>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Modal
            isOpen={state.modal_static}
            toggle={state.tog_static}
            backdrop="static"
            centered
            size="lg"
          >
            <ModalHeader toggle={() => setState({ ...state, modal_static: false })}>
              Add User Details
            </ModalHeader>
            <ModalBody>
              <Form onValidSubmit={addCustomer}>
                <Row>
                  <Col lg={12}>
                    <Alert
                      color="success"
                      isOpen={state.isAlertOpen}
                      toggle={() => setState({ ...state, isAlertOpen: false })}
                    >
                      Data Added Successfully...!
                    </Alert>
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        name="custname"
                        type="text"
                        className="form-control"
                        id="custname"
                        placeholder="Enter Name"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        name="custemail"
                        type="email"
                        className="form-control"
                        id="custemail"
                        placeholder="Enter Email"
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label htmlFor="role">Role</Label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>User</option>
                        <option value="1">Manager</option>
                        <option value="2">Ceo</option>
                        <option value="3">Branch</option>
                      </select>
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label htmlFor="branch">Branch</Label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Buenos Aires</option>
                        <option value="1">Cordoba</option>
                        <option value="2">Mendoza</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <ModalFooter>
                  <Button
                    type="button"
                    color="light"
                    onClick={() => setState({ ...state, modal_static: false })}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    </>
  );
  /*
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Users" breadcrumbItems={breadcrumbItems} />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">List All Users</h4>
                <p className="card-title-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde saepe aperiam
                  tenetur ad natus officia iste assumenda totam dignissimos doloremque beatae
                  incidunt, qui nostrum sint quis dolore ratione nobis recusandae!
                </p>

                <div className="table-responsive">
                  <Table className="mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
  */
};

export default Users;
