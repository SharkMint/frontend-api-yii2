import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Perfil = () => {

  const [perfil, setPerfil] = useState();

  useEffect(() => {
    axios.post('/api/url', 
    {
      mode: 'cors',
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        const data = response.data;
        setPerfil(data);
        console.log(data);
      })
      .catch(response => {
        console.error(response);
      })
  }, [])

  return (
    <>
    <Container>
      <h1 className="text-center mt-4 mb-4" >Lista de perfiles</h1>

      <Table striped bordered size="sm">
        <thead className="text-center" >
          <tr className="row" >
            <th className="col" >id</th>
            <th className="col" >Nombre</th>
            <th className="col" >apellido</th>
            <th className="col" >correo</th>
            <th className="col" >tel/cel</th>
            <th className="col" >Editar</th>
            <th className="col" >Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center" >
          {
            perfil?.map((item, index) => {
              return (
                <tr className="row" key={index} >
                  <td className="col" >1</td>
                  <td className="col" >Mark</td>
                  <td className="col" >Otto</td>
                  <td className="col" >@mdo</td>
                  <td className="col" >Otto</td>
                  <button className="col btn btn-warning" >
                    <Link className="nav-link ist-inline-item"  to="/perfil/:id " >
                      Editar
                    </Link>
                  </button>
                  <button className="col btn btn-danger" >
                    <Link className="nav-link ist-inline-item"  to="/perfil/:id " >
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

export default Perfil