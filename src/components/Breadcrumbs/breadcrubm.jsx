import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <Breadcrumb class=' d-flex justify-content-start bg-secondary text-white' style= {{height: '40px', paddingLeft: "10px"}}>
      
      <Link to="/" style={{textDecoration:"none"}}>
        <p class="text-light">Home / </p>
      </Link>
      <br />
      <Link style={{textDecoration:"none"}} to="/login">
        <p class="text-light ">/ Login</p>
      </Link>

    </Breadcrumb>
  );
}

export default Breadcrumbs;