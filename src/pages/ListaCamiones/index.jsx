import Accordion from 'react-bootstrap/Accordion';

const  ListaCamiones1 = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>VEHICULO 1</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>VEHICULO 2</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>VEHICULO 3</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>VEHICULO 4</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>VEHICULO 5</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>VEHICULO 6</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
        <Accordion.Header>VEHICULO 7</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>VEHICULO 8</Accordion.Header>
        <Accordion.Body>
          INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>VEHICULO 9</Accordion.Header>
        <Accordion.Body>
        INFO CAMIONES
        </Accordion.Body>
      </Accordion.Item>
      
      
    </Accordion>
  );
}

export default ListaCamiones1;