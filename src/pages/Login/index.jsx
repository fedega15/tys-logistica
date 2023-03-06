
import React from 'react';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
            }}
        >
            {({ isSubmitting }) => (
                 <div className="container">
            <div className="col-md-12 mt-5">
                <Form>
                    <h4 className="mb-3">Iniciar sesion</h4>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="email">Email</label>
                                <Field type="email" className="form-control" id="email" name="email" placeholder="tys@ejemplo.com"/>
                            </div>
                        </div>

                        <div className="row">
                             <div className="form-group col-md-6 mb-3">
                                 <label htmlFor="password">Contraseña</label>
                                 <Field name="password" className="form-control" type="password" placeholder="***********"/>
                            </div>
                        </div>
                         <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Porfavor espere..." : "Enviar"}</button>
                    </div>

                </Form>
            </div>
         </div>
            )}
        </Formik>
    );
};

export default Login;