import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Client = () => {

  const [client, setClient] = useState();

  useEffect(() => {
    axios.post('/api/url')
      .then(response => {
        const data = response.data;
        setClient(data);
        console.log(data);
      })
      .catch(response => {
        const errorMessage = response.data.errors
        console.error(errorMessage);
      })
  }, [])

  const handleDelete = () => {
    axios.delete('/api/client/{id}')
    .then(response => {
      if(response === false) {
        alert('Error al eliminar.');
      } else {
        console.log('Success');
      }
    })
    .catch(error => {
      const errorMessage = error
      console.error(errorMessage)
    })
  }

  return (
    <>
      <Container>
        <h1 className="text-center mt-4 mb-4" >Lista de clientes</h1>

        <button className="btn btn-success mb-4" >
          <Link className="nav-link"  to="/createclient" >
            Crear cliente
          </Link>
        </button>

        <Table striped bordered size="sm">
          <thead className="text-center" >
            <tr className="row" >
              <th className="col" >id</th>
              <th className="col" >Nombre</th>
              <th className="col" >apellido</th>
              <th className="col" >correo</th>
              <th className="col" >Tel/Cel</th>
              <th className="col" >ciudad</th>
              <th className="col" >estado</th>
              <th className="col" >Codigo Zip</th>
              <th className="col" >Pais</th>
              <th className="col" >Editar</th>
              <th className="col" >Eliminar</th>
            </tr>
          </thead>
          <tbody className="text-center" >
            {
              client?.map((item, index) => {
                return (
                  <tr className="row" key={index} >
                    <td className="col" >1</td>
                    <td className="col" >Mark</td>
                    <td className="col" >Otto</td>
                    <td className="col" >@mdo</td>
                    <td className="col" >Otto</td>
                    <td className="col" >@mdo</td>
                    <td className="col" >Mark</td>
                    <td className="col" >Otto</td>
                    <td className="col" >@mdo</td>
                    <button className="col btn btn-warning" >
                      <Link className="nav-link ist-inline-item"  to="/client/:id " >
                        Editar
                      </Link>
                    </button>
                    <button className="col btn btn-danger" >
                      <Link className="nav-link ist-inline-item" onClick={handleDelete} >
                        Eliminar
                      </Link>
                    </button>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Client