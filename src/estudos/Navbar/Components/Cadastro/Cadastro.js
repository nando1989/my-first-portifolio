import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Obrigatório')
});





const Cadastro = () => {

  const history = useHistory();

  const handleLogin = () => {
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
        alert('Login bem-sucedido!');
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="login-form">
        <div className="form-group">
          <label htmlFor="email"></label>
          <Field type="email" placeholder="E-mail" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>


        <div className="form-group">
          <label htmlFor="password"></label>
          <Field type="password" placeholder="senha" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>


        {/* <button className="entrar" type="submit" disabled={isSubmitting}>
          Entrar
        </button> */}
      </Form>
    )}
  </Formik>
  history.push('/dashboard');
  }

  // Lógica de autenticação, validação, etc.

  // Redireciona para a página do dashboard após o login bem-sucedido




return (

<div>
  {/* Seu formulário de login */}
  <button onClick={handleLogin}>Login</button>
</div>
);
};
   





export default Cadastro;