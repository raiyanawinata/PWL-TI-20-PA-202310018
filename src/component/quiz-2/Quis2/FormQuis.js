import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const FormQuis = () => {
    const [Input, setInput] = useState("");

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    const handleSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        setShow(true);
      }
      setValidated(true);
    };
    return (
        
        <><Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: 250, flexDirection: 'row' }}>
                <Form.Label>Masukkan Text</Form.Label>
                <Form.Control type="text" placeholder="Enter Text" onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                OK
            </Button>
        </Form><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Saat ini sedang berlangsung {Input}</Modal.Title>
                </Modal.Header>
            </Modal></>
        
    );
}

export default FormQuis;
