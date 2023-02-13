import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const EditAddress = () => {

  const [formAddress, setFormAddress] = useState({
    city: '',
    state: '',
    zipcode: '',
    country: '',
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormAddress({
      ...formAddress,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      city: formAddress.city,
      state: formAddress.state,
      zipcode: formAddress.zipcode,
      country: formAddress.country
    }

    axios.put('/api/address/:id', formData, 
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
      <Container>

        <h1 className="text-center mt-4 mb-4" >Editar Direccion</h1>

        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" >
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" name="city" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" name="state" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Codigo ZIP</Form.Label>
            <Form.Control type="text" name="zipcode" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" name="country" onChange={handleChange} />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default EditAddress