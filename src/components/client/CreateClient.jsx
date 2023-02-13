import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const CreateClient = () => {

  const [formClient, setFormClient] = useState({
    firstname: '',
    lasttname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormClient({
      ...formClient,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstname: formClient.firstname,
      lastname: formClient.lastname,
      email: formClient.email,
      phone: formClient.phone,
      city: formClient.city,
      state: formClient.state,
      zipcode: formClient.zipcode,
      country: formClient.country
    }

    axios.post('/api/client', formData, 
    {
      accept: 'application/json',
    })
      .then(response => {
        const success = response.data;
        console.log(success);

        if(response.data.status === 200) {
          alert('Cliente creado exitosamente');
        } else {
          alert('Error al crear el cliente');
        }
      })
      .catch(response => {
        const errorMessage = response.data.message;
        console.log(errorMessage);

        if(errorMessage === true){
          alert('Ha ocurrido un error.');
        }
      })

    e.target.reset();
  }

  return (
    <>
      <Container >

        <h1 className="text-center mt-4 mb-4" >Crear cliente</h1>

        <Form className="container-md" onSubmit={handleSubmit} >
          <Form.Group className="mb-2" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="firstname" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name="lasttname" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2" >
            <Form.Label>Telefono / Celular </Form.Label>
            <Form.Control type="text" name="phone" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2" >
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" name="city" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2" >
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" name="state" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2" >
            <Form.Label>Codigo ZIP</Form.Label>
            <Form.Control type="text" name="zipcode" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2" >
            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" name="country" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit"  >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default CreateClient