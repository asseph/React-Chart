import React, { useState } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { adminLogin } from '../../store/actions/authActions';

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // to handle redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const [loading, setLoading] = useState(false);

  // to handle redirect location
  let from = location.state?.from?.pathname || '/';

  const onSubmit = dataBody => {
    setLoading(true);
    clearErrors('server');
    dispatch(adminLogin(dataBody))
      .then(() => {
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch(err => {
        setError('server', {
          type: 'manual',
          message: err.msg,
        });
        setLoading(false);
      });
  };

  return (
    <div className="d-flex align-items-center px-0 mt-5">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="card text-left py-5 px-4 px-sm-5">
            <h4 className="d-flex justify-content-center">Dashboard Retail</h4>
            <h6 className="font-weight-light d-flex justify-content-center">
              Enter your email and password below.
            </h6>
            <div className="pt-3">
              {Object.keys(errors).length !== 0 && (
                <Alert variant="danger">
                  <ShowErrors errors={errors} />
                </Alert>
              )}

              <Form onSubmit={handleSubmit(onSubmit)} className={loading && 'loading'}>
                <fieldset disabled={loading}>
                  <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                    <Form.Control type="email" {...register('email')} />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" {...register('password')} />
                  </FloatingLabel>

                  <div className="mt-3 d-flex justify-content-center">
                    <Button type="submit" disabled={loading}>
                      Sign In
                    </Button>
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const convertObjectsToArray = Objects => {
  return Object.keys(Objects).map(key => ({
    name: key,
    message: Objects[key].message,
  }));
};

const ShowErrors = ({ errors }) => {
  // const allErrors = ;
  return convertObjectsToArray(errors).map(({ name, message }, idx) => (
    <p key={idx} style={{ margin: 0 }}>
      <strong>{name}</strong>: {message}
    </p>
  ));
};
