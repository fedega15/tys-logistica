
import React ,   {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

    const Login =( ) => {

        const [credenciales, setCredenciales] = useState ({
            useremail: '',           
            password: '',  
        });

        const {useremail, password} = credenciales
        const handleChange = event => {
            setCredenciales (credenciales => ({
                ...credenciales, 
                [event.target.name]:event.target.value,
            }))    
         } ;
         
    return (
        <div className='container'>
        <Formik > 
                 <div className="container ">
                    
            <div className="col-md-11 mt-5">
                <Form className='position-relative  '>
                    <h4 className="mb-3">Iniciar sesion</h4>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                                <label htmlFor="useremail">Email</label>
                                <Field 
                                    type="email" 
                                    className="form-control" 
                                    name="usermail" 
                                    value={useremail} 
                                    onChange = {handleChange}
                                    placeholder="tys@ejemplo.com"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="password">Contraseña</label>
                                <Field 
                                    type="password"
                                    className="form-control" 
                                    name="password"
                                    value={password} 
                                    onChange = {handleChange} 
                                    placeholder="***********"/>
                            </div>
                        </div>
                         <br />
                    <div className="form-group">
                        <button 
                            type="submit" 
                            variant="primary" 
                            className="btn btn-secondary"
                            disabled= {useremail || !password} >
                            Enviar
                        </button>
                    </div>

                </Form>
            </div>
         </div>
         
        </Formik>
        </div>
    )};


export default Login;