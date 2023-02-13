import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Address = () => {

  const [address, setAddress] = useState();

  useEffect(() => {
    axios.post('/api/url')
      .then(response => {
        const data = response.data;
        setAddress(data);
        console.log(data);
      })
      .catch(response => {
        const errorMessage = response.data.errors
        console.error(errorMessage);
      })
  }, [])

  return (
    <>
      <Container>
        <h1 className="text-center mt-4 mb-4" >Lista de Direcciones</h1>

        <Table striped bordered size="sm">
          <thead className="text-center" >
            <tr className="row" >
              <th className="col" >id</th>
              <th className="col" >ciudad</th>
              <th className="col" >estado</th>
              <th className="col" >Codigo Zip</th>
              <th className="col" >Pais</th>
              <th className="col" >Edit</th>
              <th className="col" >Delete</th>
            </tr>
          </thead>
          <tbody className="text-center" >
            {
              address?.map((item, index) => {
                return (
                  <tr className="row" key={index} >
                    <td className="col" >1</td>
                    <td className="col" >Mark</td>
                    <td className="col" >Otto</td>
                    <td className="col" >@mdo</td>
                    <td className="col" >Otto</td>
                    <button className="col btn btn-warning" >
                      <Link className="nav-link ist-inline-item"  to="/address/:id " >
                        Edit
                      </Link>
                    </button>
                    <button className="col btn btn-danger" >
                      <Link className="nav-link ist-inline-item"  to="/address/:id " >
                        Delete
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

export default Address