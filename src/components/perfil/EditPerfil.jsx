import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const EditPerfil = () => {

  const [formPerfil, setFormPerfil] = useState({
    firstname: '',
    lasttname: '',
    email: '',
    phone: '',
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormPerfil({
      ...formPerfil,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstname: formPerfil.firstname,
      lastname: formPerfil.lastname,
      email: formPerfil.email,
      phone: formPerfil.phone,
    }

    axios.put('/api/perfil/:id', formData,
      {
        accept: 'application/json',
      })
      .then(response => {
        const success = response.data;
        console.log(success);

        if (response.data.status === 200) {
          alert('Cliente creado exitosamente');
        } else {
          alert('Error al crear el cliente');
        }
      })
      .catch(response => {
        const errorMessage = response.data.message;
        console.log(errorMessage);

        if (errorMessage === true) {
          alert('Ha ocurrido un error.');
        }
      })

    e.target.reset();
  }

  return (
    <>
      <Container>

        <h1 className="text-center mt-4 mb-4" >Editar Perfil</h1>

        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="firstname" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name="lasttname" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="text" name="email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Telefono / Celular</Form.Label>
            <Form.Control type="text" name="phone" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default EditPerfil