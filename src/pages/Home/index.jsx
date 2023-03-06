import React from 'react' 
import styles from  "./home.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios'


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZ3VzdGF2byIsImV4cCI6MTY3ODQ2NDU1MywiaWF0IjoxNjc3ODU5ODk3fQ.GE0IwXJFd1J3gUOPR4b7oZ3UHrJUldQ__C_1IqpS-_U'
const Axios = axios.create({
    baseURL: 'http://webports.duckdns.org:5000',
    headers: {
        Authorization: `token ${token}`    
        //withCredentials: true,
    }
  })


const Home = () => {
  const [camiones, setCamiones] = useState([])


  const url = '/vehiculos_listar'
  const fetchData = async() => {
      try {
          const api_response = await Axios.post(url)
          console.log (api_response.data)
          console.log (api_response)
          setCamiones(api_response.data) // agregue el data y cambie el console log  por produtos
      } catch (error) {
          console.log(`Error en peticion /vehiculos_listar: ${error}`)
      }
  }
  useEffect(()=>{
      fetchData()
  },[])

  return (
      <div className={styles.containerTable}>
       <h1 className={styles.camionesTitle}></h1>
        <div className={styles.tableContainer} id="keywords" cellspacing="0" cellpadding="0">

          <div className={styles.tablaArriba}>
            <div className={styles.listDivArriba}>N° MOTOR</div>
            <div className={styles.listDivArribaId}>ID</div>
            <div className={styles.listDivArriba}>PATENTE  </div>
            <div className={styles.listDivArriba}>N° CHASIS</div>
            <div className={styles.listDivArriba}>TIPO</div>
          </div>
    
          <div className={styles.tableListItem}>
            {camiones.map((camion,index) => 
            <TableListItem className={styles.tableListItem} key={index} numMotor={camion.numMotor} id={camion.id} patente={camion.patente} 
             numChasis={camion.numChasis} tipo={camion.tipo} />
            )}
          </div>  

        </div>
      </div>
  )
}
export default Home

export const TableListItem = ({numMotor,id,patente,numChasis,tipo }) => {
  return (
  <div className={styles.itemContainer}>
    <div className={styles.listDiv1}>{numMotor}</div>
    <div className={styles.listDiv2}>{id}</div>
    <div className={styles.listDiv3}>{patente}</div>
    <div className={styles.listDiv4}>{numChasis}</div>
    <div className={styles.listDiv5}>{tipo}</div>
  </div>
  )
}