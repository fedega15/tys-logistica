import React, { useState, useEffect } from 'react';

function Signup() {
  const [choferes, setChoferes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZ3VzdGF2byIsImV4cCI6MTY3ODI4MDEwMywiaWF0IjoxNjc3NzYzMTM3fQ.fd8NJ0I-2uSrDbSZGoq-48ISs-8HPHE0Ga9zghFauf8'; // aquí debes reemplazar "my-token" por el token obtenido
      const response = await fetch('http://webports.duckdns.org:5000/choferes_listar', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setChoferes(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {choferes.map((chofer) => (
        <div key={chofer.id}>
          <h2>{chofer.nombre}</h2>
          <p>{chofer.edad}</p>
          <p>{chofer.direccion}</p>
        </div>
      ))}
    </div>
  );
}

export default Signup;