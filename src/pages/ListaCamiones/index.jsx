import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect} from 'react'
import { getVehicles } from '../../api/Model/Vehicle';
import {handleFetchError} from '../../utils/errorhandler';
//import { Vehicle } from '../../components/Vehicle';
const  ListaCamiones1 = () => {
  const [Loading, setLoading] = useState (false)
  const [error, setError] = useState ('')
  const [vehicles, setVehicles] = useState([])
  const handleFetchVehicles = async() => {
    setLoading(true)
  try {
      const api_response = await getVehicles()
      if(api_response.status === 200){
        const {data} = api_response 
        setVehicles(data)  
        console.log(data)
        console.log(vehicles)    
      }
      
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
  if(Loading){return (<>Loading..</>)}
  if(error){return (<>{error}</>)}

  const handleClick = (aux) => {console.log(aux)}
  return (
    <Accordion defaultActiveKey={['0']} 
    alwaysOpen>
       {vehicles.map((vehicle,index)  =>( 
          <Accordion.Item eventKey={index} key={index} onClick ={() =>handleClick('index')}>
            <Accordion.Header>VEHICULO {vehicle.id}</Accordion.Header>
            <Accordion.Body>
              <p>{vehicle.numChasis}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

export default ListaCamiones1;