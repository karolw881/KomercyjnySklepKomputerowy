
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Niepoprawny adres e-mail').required('Wymagane'),
  password: Yup.string().min(6, 'Hasło musi mieć co najmniej 6 znaków').required('Wymagane'),
});

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">E-mail:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Hasło:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>Zaloguj się</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
