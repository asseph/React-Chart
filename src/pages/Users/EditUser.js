import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Alert, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../components/common/Breadcrumbs';

//for form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { saveUser } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { axiosWithOutToken } from '../../services/axios';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  // password: yup.string().required().min(6),
  role: yup.string().required(),
});

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState({});

  const breadcrumbItems = [
    { title: 'Fintech', link: '/' },
    { title: 'Users', link: '/users' },
    { title: 'Edit User', link: '#d' },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = dataBody => {
    setLoading(true);
    // clearErrors('server');
    let dataUpdated = dataBody;

    // sino se ingresa contra sacarla.
    if (dataBody.password === '') {
      const { password, ...dataUpdated } = dataBody;
    }
    dispatch(saveUser(dataUpdated, id))
      .then(() => {
        setLoading(false);
        setSuccess('Guardado Correctamente');
        setTimeout(() => {
          setSuccess('');
        }, 1500);
      })
      .catch(err => {
        setError('server', {
          type: 'manual',
          message: err.msg,
        });
        setLoading(false);
      });
  };

  // para obtener los datos del form
  useEffect(() => {
    setLoading(true);
    axiosWithOutToken('/users/' + id).then(({ data }) => {
      if (data) {
        const fields = ['name', 'email', 'role'];
        fields.forEach(field => setValue(field, data.user[field]));
        setUser(data.user);
        setLoading(false);
      }
    });
  }, [id, setValue]);

  return (
    <div className="page-content">
      <Container>
        <Breadcrumbs title={`Edit: ${user?.name}`} breadcrumbItems={breadcrumbItems} />

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <h4 className="card-title">Edit User</h4>
                  <Button variant="primary" onClick={() => navigate(-1)}>
                    Back
                  </Button>
                </div>
                {Object.keys(errors).length !== 0 && (
                  <Alert color="danger">
                    <ShowErrors errors={errors} />
                  </Alert>
                )}

                {success && (
                  <Alert color="success">
                    <strong>{success}</strong>
                  </Alert>
                )}
                <Form onSubmit={handleSubmit(onSubmit)} className={loading && 'loading'}>
                  <fieldset disabled={loading}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        {...register('name')}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        {...register('email')}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        {...register('password')}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="role">
                      <Form.Label>Role</Form.Label>
                      <select className="form-select" name="role" {...register('role')}>
                        <option value="">Select one role</option>
                        <option value="USER_ROLE">User</option>
                        <option value="MANAGER_ROLE">Manager</option>
                        <option value="CEO_ROLE">Ceo</option>
                      </select>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="formStatus" />
                <label className="form-check-label" for="formStatus">
                  Allow the use of functions on the platform
                </label>
              </div>
            </Form.Group> */}
                    {/* <Form.Group className="mb-3" controlId="formBasicEmailsss">
                    <Form.Label>Branch</Form.Label>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">Buenos Aires</option>
                      <option value="2">Rosario</option>
                      <option value="3">Mendoza</option>
                      <option value="4">Salta</option>
                      <option value="5">Cordoba</option>
                      <option value="6">Santa Cruz</option>
                    </select>
                  </Form.Group> */}
                  </fieldset>
                  <Button variant="primary" type="submit" disabled={loading}>
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditUser;
const ShowErrors = ({ errors }) => {
  return convertObjectsToArray(errors).map(({ name, message }, idx) => (
    <p key={idx} style={{ margin: 0 }}>
      <strong>{name}</strong>: {message}
    </p>
  ));
};

const convertObjectsToArray = Objects => {
  return Object.keys(Objects).map(key => ({
    name: key,
    message: Objects[key].message,
  }));
};
