import React from 'react'
import {Formik, Field, Form} from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'

const Signup = () => {
  return (<Formik
    initialValues={{ patente: '', NumChasis: '', NumMotor: '', NumMovil: '', Tipo:''}}
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
          <h4 className="mb-3">Carga tu vehiculo</h4>

          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="firstname">Patente</label>
              <input type="text" className="form-control" id="patente" name="patente"/>
            </div>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="lastname">Numero de chasis</label>
              <input type="number" className="form-control" id="NumChasis" name="NumChasis"/>
             </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Numero de motor</label>
            <input type="number" className="form-control" id="NumMotor" name="NumMotor" />
          </div>

          <div className=" form-group mb-3">
            <label htmlFor="email">Numero movil</label>
            <input type="number" className="form-control" id="NumMovil" name="NumMovil" />
          </div>

          <div className="row">
            <div className="form-group col-md-5 mb-3">
              <label htmlFor="country">Tipo</label>
              <select className="custom-select d-block w-100" id="tipo" name="tipo">
                <option value="">Opciones...</option>
                <option value="1">Camion</option>
                <option value="2">Acoplado</option>
                <option value="3">Camion + Acoplado</option>
              </select>        
            </div>

            <div className="form-group col-md-4 mb-3">
              <label htmlFor="state">Id</label>
              <select className="custom-select d-block w-100" id="state" name="state">
                <option value="">Opciones...</option>
                <option value="lagos">1</option>
                <option value="east legion">2 </option>
                <option value="cape town">3</option>
              </select>             
            </div>
          </div>

          
            <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={isSubmitting}>{isSubmitting ? "Porfavor espere..." : "Enviar"}</button>
        </Form>
      </div>

    </div>
    )}
    </Formik>
 
  )
}
export default Signup