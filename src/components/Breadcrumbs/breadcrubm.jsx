import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <Breadcrumb class='d-flex justify-content-start bg-secondary text-white' style= {{height: '42px', paddingLeft: "10px"}}>
      
      <Link style={{textDecoration:"none"}} to="/login">
        <p class="text-light fw-semibold "> Inicia sesion /</p>
      </Link>
      
      <Link to="/" style={{textDecoration:"none"}}>
        <p class="text-light fw-semibold">/ Lista de camiones / </p>
      </Link>
      <br />
     
      <Link style={{textDecoration:"none"}} to="/AgregarCamiones">
        <p class="text-light fw-semibold ">/ Agrega tu camion</p>
      </Link>

    </Breadcrumb>
  );
}

export default Breadcrumbs;