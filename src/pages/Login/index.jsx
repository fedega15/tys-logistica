import React , {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { newUser } from '../../api/Model/Login';
import { validacionSignUp } from '../../utils/validacionSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


    const Login =( ) => {

        const [credenciales, setCredenciales] = useState ({
            useremail: null ,           
            password: null,  
        });
        
        const [errores, setErrores] = useState({
            'useremail': null,
            'password': null,
        })


        const handleChange = async () => {
            try  {
                const [errors, correct] = validacionSignUp(credenciales)
                setErrores(errors)
                if (correct ) {
                    const api_response = await newUser(credenciales)
                        if(api_response.status === 200){
                            const {data} = api_response.
                            setCredenciales (data)
                            console.log(credenciales)
                        }
                    }console.log(errors, correct)
                }catch (error) {
                    console.log("error en registro")
                }
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
                                    className="form-control" 
                                    onChange = {value => setCredenciales ({ ...credenciales, "useremail": value})}
                                    placeholder="tys@ejemplo.com"
                                    erroresMessage={errores.useremail}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="password">Contraseña</label>
                                <Field 
                                    className="form-control" 
                                    name="password"
                                    onChange = {value => setCredenciales({...credenciales, 'password': value})}
                                    placeholder="***********"
                                    errorMessage={errores.password}
                                    />

                            </div>
                        </div>
                         <br />
                    <div className="form-group">
                        <button 
                            type="submit" 
                            onClick={handleChange} >
                            Enviar
                        </button>
                    </div>

                </Form>
            </div>
         </div>
         
        </Formik>
        </div>
    )};

    }
export default Login;