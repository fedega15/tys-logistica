import React from 'react' 
import styles from  "./home.module.css"
import { dataCamiones } from "./const"

const Home = () => {
  return (
      <div className={styles.containerTable}>
       <h1 className={styles.camionesTitle}>Camiones futuros</h1>
        <div className={styles.tableContainer} id="keywords" cellspacing="0" cellpadding="0">

          <div className={styles.tablaArriba}>
            <div className={styles.listDivArriba}>CAMIONES</div>
            <div className={styles.listDivArriba}>    EMPRESA</div>
            <div className={styles.listDivArriba}>HORARIOS  </div>
            <div className={styles.listDivArriba}>CARGA</div>
            <div className={styles.listDivArriba}>GALPON</div>
          </div>
    
          <div className={styles.tableListItem}>
            {dataCamiones.map((camion,index) => 
            <TableListItem className={styles.tableListItem} key={index}carga={camion.carga} horarios={camion.horarios} nombreCompañia={camion.nombreCompañia} 
             galpon={camion.galpon} vehiculo={camion.vehiculo} />
            )}
          </div>  

        </div>
      </div>
  )
}
export default Home

export const TableListItem = ({vehiculo,nombreCompañia,horarios,carga,galpon }) => {
  return (
  <div className={styles.itemContainer}>
    <div className={styles.listDiv1}>{vehiculo}</div>
    <div className={styles.listDiv2}>{nombreCompañia}</div>
    <div className={styles.listDiv3}>{horarios}</div>
    <div className={styles.listDiv4}>{carga}</div>
    <div className={styles.listDiv5}>{galpon}</div>
  </div>
  )
}