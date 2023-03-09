import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect} from 'react'
import { getVehicles } from '../../api/Model/Vehicle';
import {handleFetchError} from '../../utils/errorhandler'
const  ListaCamiones1 = () => {
  
  const [vehicles, setVehicles] = useState([])
  const [Loading, setLoading] = useState (false)
  const [error, setError] = useState ('')

  const handleFetchVehicles = async() => {
    setLoading(true)
  try {
      const api_response = await getVehicles()
      if(api_response.status === 200){
        const {data} = api_response 
        setVehicles(...data)      
        console.log(data)
      }
      setVehicles() 
    } catch (error) {
      const strError = handleFetchError(error)
      setError (strError)
    } 
    finally {
      setLoading(false)
    }
  }

  useEffect (() => {
    handleFetchVehicles()
  },[])
  if(Loading){return (<>Loading...</>)}
  if(error){return (<>{error}</>)}
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